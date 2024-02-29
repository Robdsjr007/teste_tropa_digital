// Selecione todos os elementos <a> (links)
const links = document.querySelectorAll('a');

// Adicione ouvintes de eventos para cada link
links.forEach(link => {
    // Selecione o elemento SVG dentro do link (se houver)
    const svgElement = link.querySelector('svg');

    link.addEventListener('mouseover', function() {
        // Altere a cor do elemento SVG para laranja (se houver)
        if (svgElement) {
            svgElement.style.fill = 'orange';
        }

        // Ajuste a largura do link (se desejar)
        link.style.width = '226px';
    });

    link.addEventListener('mouseout', function() {
        // Restaure a cor original do elemento SVG (branco) (se houver)
        if (svgElement) {
            svgElement.style.fill = 'white';
        }

        // Restaure a largura original do link (por exemplo, 190px)
        link.style.width = '190px';
    });
});
