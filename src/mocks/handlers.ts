import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('/api/teste', () => {
        return HttpResponse.json ({
            status: 'ok',
            message: 'Jungle Gaming API funcionando!',
        });
    })
]