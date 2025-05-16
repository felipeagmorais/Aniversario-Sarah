# Site de Aniversário para Sarah

Este é um site especial criado para o aniversário da Sarah, uma confeiteira talentosa! O site inclui seções para mensagens pessoais, uma galeria de fotos, uma linha do tempo do relacionamento, e uma seção celebrando os talentos de confeitaria da Sarah.

## Como personalizar o site

### Adicionando fotos reais

Para adicionar suas fotos ao site, siga estas etapas:

1. Coloque suas fotos na pasta `images`
2. No arquivo `js/script.js`, atualize o array `galleryImages` com os caminhos corretos para suas fotos e descrições apropriadas
3. No arquivo `index.html`, você também deve substituir a referência para `hero-bg.jpg` na seção hero

### Personalizando a linha do tempo

A linha do tempo na seção "Nossa História" pode ser personalizada editando a estrutura HTML no arquivo `index.html`. Você pode adicionar mais itens seguindo o mesmo formato:

```html
<div class="timeline-item">
    <div class="timeline-date">Data do evento</div>
    <div class="timeline-content">
        <h3>Título do evento</h3>
        <p>Descrição do evento</p>
    </div>
</div>
```

### Personalizando os doces e confeitaria

Na seção "A Confeiteira Mais Talentosa", você pode substituir os placeholders por fotos reais dos doces e bolos confeitados pela Sarah.

## Abrindo o site

Para visualizar o site, basta abrir o arquivo `index.html` em qualquer navegador web.

Esperamos que a Sarah adore este presente de aniversário!
