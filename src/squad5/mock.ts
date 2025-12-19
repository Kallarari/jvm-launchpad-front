import { sleep } from "../infrastructure/utils/sleep";
import { Acervo, type IAcervo, type IHttpResponse } from "./interface";

export async function getAcervo(): Promise<IHttpResponse<IAcervo[]>> {
    await sleep(2000);

    return {
        status: 200,
        body: Acervo.listAcervo
    };
}

export async function postAcervo(acervo: IAcervo): Promise<IHttpResponse<IAcervo>> {
    await sleep(2000);

    const response = Acervo.PostAcervo(acervo)

    return response
}
