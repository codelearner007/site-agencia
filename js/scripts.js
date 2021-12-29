$(document).ready(function() /* Faz com que isso rode somente quando o documento estiver totalmente carregado */{

    // Progress bar
    let containerA = document.getElementById("circleA"); // Pega o elemento circular criado e insere na variável container

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#65DAF9',
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA'},
        to: { color: '65DAF9'},

        step: function(state, circle) {

            circle.path.setAttribute('stroke', state.color);  
            
            var value = Math.round(circle.value() * 60);

            circle.setText(value);

        }

    });

    circleA.animate(1.0);
    
});