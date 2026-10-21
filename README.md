# Império Bolos Caseiros

Aplicação React + Vite, JavaScript e CSS. Requer Node.js 20.19+ ou 22.12+.

## Executar

npm install
npm run dev

## Compilar

npm run build
npm run preview

## Atualizar conteúdo

- `src/data.js`: dados da loja, horários, links e catálogo. `hours`, `facebook` e `reviewsUrl` aguardam confirmação. Os depoimentos foram fornecidos pelo cliente; não há sincronização com Google.
- Produtos e preços são exclusivamente demonstrativos. Confirme o cardápio antes de produção e remova os avisos apenas após substituir os dados.
- Fotos: adicione arquivos em `public/images/` e configure `image` no produto. `ImagePlaceholder.jsx` aceita title, subtitle, aspectRatio, className e imageSrc. Imagens ausentes ou com erro mostram o placeholder, preservando o tamanho.
- `src/main.jsx`: seções, avaliações e galeria. A galeria usa o mesmo componente.
- `src/style.css`: cores, estilos e tamanhos responsivos.

A sacola usa estado React e localStorage (`imperio-cart`). Não coleta dados pessoais, não envia pedidos e não processa pagamentos. Integrações futuras devem substituir o catálogo por uma camada de serviço e validar preços e estoque no servidor antes de implementar checkout.

As artes enviadas foram preservadas em public/images. A captura do Instagram e a referência do placeholder são apenas arquivos de referência. A marca no site é tipográfica; a ilustração da vovó é decorativa.

## Apresentação sem instalação

Baixe o arquivo apresentacao.html e abra no navegador. Imagens, fontes, estilos e interações estão incorporados ao arquivo. Links de contato e navegação externa precisam de internet.
