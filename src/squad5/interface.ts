export interface IHttpResponse<T> {
    status: number
    body: T
}



export interface IAcervo {
    id: number
    titulo: string,
    subTitulo: string,
    url: string
}

export class Acervo {
    static listAcervo: IAcervo[] = [{
        id: 1,
        titulo: 'titulo01',
        subTitulo: 'subTitulo01',
        url: 'https://teste01'
    },
    {
        id: 2,
        titulo: 'titulo02',
        subTitulo: 'subTitulo02',
        url: 'https://teste02'
    }
    ]

    static PostAcervo(acervo: IAcervo): IHttpResponse<IAcervo> {

        this.listAcervo.push(acervo)

        return {
            status: 200,
            body: acervo
        }
    }
}