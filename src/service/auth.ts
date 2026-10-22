const CHAVE_USUARIOS = 'usuariosCadastrados';
const CHAVE_LOGADO = 'usuarioLogado';
const EVENTO_AUTH = 'authChange';

export type Usuario = { nome: string; email: string; senha: string };
export type UsuarioLogado = Pick<Usuario, 'nome' | 'email'>;

export function listarUsuarios(): Usuario[] {
    try {
        return JSON.parse(localStorage.getItem(CHAVE_USUARIOS) || '[]');
    } catch {
        return [];
    }
}

export function buscarUsuario(email: string, senha: string): Usuario | undefined {
    return listarUsuarios().find(
        (usuario) => usuario.email === email.trim().toLowerCase() && usuario.senha === senha
    );
}

export function emailJaCadastrado(email: string): boolean {
    return listarUsuarios().some((usuario) => usuario.email === email);
}

export function salvarUsuario(usuario: Usuario): void {
    localStorage.setItem(CHAVE_USUARIOS, JSON.stringify([...listarUsuarios(), usuario]));
}

function notificarMudanca() {
    window.dispatchEvent(new Event(EVENTO_AUTH));
}

export function iniciarSessao({ nome, email }: UsuarioLogado): void {
    localStorage.setItem(CHAVE_LOGADO, JSON.stringify({ nome, email }));
    notificarMudanca();
}

export function encerrarSessao(): void {
    localStorage.removeItem(CHAVE_LOGADO);
    notificarMudanca();
}

export function haUsuarioLogado(): boolean {
    return !!localStorage.getItem(CHAVE_LOGADO);
}

export function assinarMudancaAuth(callback: () => void): () => void {
    window.addEventListener(EVENTO_AUTH, callback);
    return () => window.removeEventListener(EVENTO_AUTH, callback);
}
