# Global Tech — Site institucional

Site estático, responsivo e sem dependências de compilação, compatível com GitHub Pages.

## Visualizar localmente

Na pasta do projeto, execute `python3 -m http.server 8000` e abra `http://localhost:8000`.

## Estrutura

- `index.html`: início, oito serviços, compromissos ambientais e chamada para orçamento.
- `pages/sobre.html`: missão, visão, valores e conservação ambiental.
- `pages/contato.html`: WhatsApp, telefone e e-mail.
- `style.css`: estilos e cores do logo (azul, verde e marrom).
- `index.js`: menu acessível no celular e atualização do ano no rodapé.
- `assets/territorio.svg`: ilustração original e conceitual, sem dados reais de uma propriedade.

O conteúdo institucional utiliza a apresentação fornecida como referência. A identidade visual e a ilustração foram criadas para o site; as imagens da apresentação não foram utilizadas. Os endereços existentes de Sobre e Contato foram preservados.

## Editar e publicar

Os textos e contatos ficam nos arquivos HTML. Os links de cada serviço abrem o WhatsApp com uma mensagem específica. Não há formulário nem armazenamento de dados.

Para atualizar o GitHub Pages, revise as alterações e integre a branch na origem configurada em **Settings → Pages**. O projeto não requer instalação ou build.
