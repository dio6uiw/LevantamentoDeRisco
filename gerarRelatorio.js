function gerarPDF() {
    // Obter o valor do elemento de rádio selecionado
    var ruido = document.querySelector('input[name="ruido"]:checked').value;
    var exposicaoR = document.querySelector('input[name="exposicaoR"]:checked').value;

    var radiacaoNaoIon = document.querySelector('input[name="radiacaoNaoIon"]:checked').value;

    var radion = document.querySelector('input[name="radion"]:checked').value;
    var exposicaoRI = document.querySelector('input[name="exposicaoRI"]:checked').value;

    // Criar um novo objeto jsPDF
    var doc = new jsPDF();
    var cumprimento = parseInt(document.getElementById("cumprimento").value);
    var largura = parseInt(document.getElementById("largura").value);
    var area = cumprimento * largura;

    doc.text("Empresa: " + document.getElementById("empresa").value, 10, 10);
    doc.text("Setor: " + document.getElementById("setor").value, 10, 20);
    doc.text("Área: " + area + " m²", 10, 30);
    doc.text("Pé direito: " + document.getElementById("pé_direito").value + " m", 10, 40);
    doc.text("Piso: " + document.getElementById("piso").value, 10, 50);
    doc.text("Estrutura: " + document.getElementById("estrutura").value, 10, 60);
    doc.text("Forro: " + document.getElementById("forro").value, 10, 70);
    doc.text("Iluminação natural: " + document.getElementById("iluminação_natural").value, 10, 80);
    doc.text("Iluminação artificial: " + document.getElementById("iluminação_artificial").value, 10, 90);
    doc.text("Ventilador natural: " + document.getElementById("ventilador_natural").value, 10, 100);
    doc.text("Ventilador artificial: " + document.getElementById("ventilador_artificial").value, 10, 110);
    doc.text("Funcionários / Funções: " + document.getElementById("funcionarios1").value + " Atividades " + document.getElementById("atividades1").value, 10, 120);
    doc.text("Funcionários / Funções: " + document.getElementById("funcionarios2").value + " Atividades " + document.getElementById("atividades2").value, 10, 130);
    doc.text("Funcionários / Funções: " + document.getElementById("funcionarios3").value + " Atividades " + document.getElementById("atividades3").value, 10, 140);
    
    //ruido
    if (ruido === 'ruidosim') {
        doc.text('Considerar ruído', 10, 150);
        doc.text('Exposição: ' + exposicaoR, 10, 160);
        doc.text('Fonte geradora: ' + document.getElementById("fonteRuido").value, 10, 165);
    } else {
        doc.text('Não considerar Radiação Ionizante', 10, 150);
    }

    //radiaçao nao ionizante
    if (radiacaoNaoIon === 'radiacaonaoion') {
        doc.text('Considerar radiação não ionizante', 10, 150);
        doc.text('Fonte geradora: ' + document.getElementById("fonteRadiacaoNaoIon").value, 10, 165);
    } else {
        doc.text('Não considerar radiação não ionizante', 10, 150);
    }
    
    //radiação ionizante
    if (radion === 'radionsim') {
        doc.text('Considerar Radiação Ionizante', 10, 170);
        doc.text('Exposição: ' + exposicaoRI, 10, 180);
        doc.text('Fonte geradora: ' + document.getElementById("fonteRadIon").value, 10, 190);
    } else {
        doc.text('Não considerar Radiação Ionizante', 10, 170);
    }

    // Salvar o PDF
    doc.save('.pdf');
    }