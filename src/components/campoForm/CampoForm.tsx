
type CampoFormularioProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

function CampoFormulario({
  label,
  children,
  className = '',
}: CampoFormularioProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-[15px] text-[var(--color-text-foreground)]">
        {label}
        <span className="ml-1 text-[var(--color-text-coral)]">*</span>
      </label>
      {children}
    </div>
  );
}

export default CampoFormulario;