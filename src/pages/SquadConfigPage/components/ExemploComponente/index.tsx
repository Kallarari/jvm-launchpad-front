/*Nao esquecam de colocar no arquivo de interface :)
E importar aqui
*/
export interface ExampleProps {
  titulo: string;
}

export const ExemploComponente = ({titulo}:ExampleProps) => {

    return (
        <h1>{titulo}</h1>
    )
}