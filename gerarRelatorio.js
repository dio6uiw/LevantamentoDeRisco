function gerarPDF() {
    // Obter o valor do elemento de rádio selecionado
    var ruido = document.querySelector('input[name="ruido"]:checked').value;
    var exposicaoR = document.querySelector('input[name="exposicaoR"]:checked').value;

    var radiacaonaoion = document.querySelector('input[name="radiacaonaoion"]:checked').value;
    var exposicaoRadNaoIon = document.querySelector('input[name="exposicaoRadNaoIon"]:checked').value;

    var radion = document.querySelector('input[name="radion"]:checked').value;
    var exposicaoRI = document.querySelector('input[name="exposicaoRI"]:checked').value;

    var vibracao = document.querySelector('input[name="vibracao"]:checked').value;
    var exposicaoV = document.querySelector('input[name="exposicaoV"]:checked').value;

    var frio = document.querySelector('input[name="frio"]:checked').value;
    var exposicaoF = document.querySelector('input[name="exposicaoF"]:checked').value;

    var calor = document.querySelector('input[name="calor"]:checked').value;
    var exposicaoC = document.querySelector('input[name="exposicaoC"]:checked').value;

    var umidade = document.querySelector('input[name="umidade"]:checked').value;
    var exposicaoU = document.querySelector('input[name="exposicaoU"]:checked').value;

    var poeira = document.querySelector('input[name="poeira"]:checked').value;
    var exposicaoP = document.querySelector('input[name="exposicaoP"]:checked').value;

    var fumos = document.querySelector('input[name="fumos"]:checked').value;
    var exposicaoFumos = document.querySelector('input[name="exposicaoFumos"]:checked').value;

    var gases = document.querySelector('input[name="gases"]:checked').value;
    var exposicaoG = document.querySelector('input[name="exposicaoG"]:checked').value;

    var transportedepeso = document.querySelector('input[name="transportedepeso"]:checked').value;
    var exposicaoLET = document.querySelector('input[name="exposicaoLET"]:checked').value;

    var biologico = document.querySelector('input[name="biologico"]:checked').value;
    var exposicaoB = document.querySelector('input[name="exposicaoB"]:checked').value;

    var controleEPI = document.querySelector('input[name="controleEPI"]:checked').value;
    
    var rotadefuga = document.querySelector('input[name="rotadefuga"]:checked').value;

    var saidadeemerg = document.querySelector('input[name="saidadeemerg"]:checked').value;

    var iluminacaoemerg = document.querySelector('input[name="iluminacaoemerg"]:checked').value;

    var extintores = document.querySelector('input[name="extintores"]:checked').value;
   
    var eletricidade = document.querySelector('input[name="eletricidade"]:checked').value;
    var exposicaoeletricidade = document.querySelector('input[name="exposicaoeletricidade"]:checked').value;

    var incendio = document.querySelector('input[name="incendio"]:checked').value;
    var exposicaoincendio = document.querySelector('input[name="exposicaoincendio"]:checked').value;

    var queda = document.querySelector('input[name="queda"]:checked').value;
    var exposicaoqueda = document.querySelector('input[name="exposicaoqueda"]:checked').value;

    // Criar um novo objeto jsPDF
    var doc = new jsPDF();
    var cumprimento = parseInt(document.getElementById("cumprimento").value);
    var largura = parseInt(document.getElementById("largura").value);
    var area = cumprimento * largura;
    doc.setFont("Arial");
    doc.setFontSize(12);

    doc.text("EMPRESA: " + document.getElementById("empresa").value, 10, 10);
    doc.text("SETOR: " + document.getElementById("setor").value, 10, 15);
    doc.text("ÁREA: " + area + " m²", 10, 20);
    doc.text("PÉ DIREITO: " + document.getElementById("pé_direito").value + " m", 10, 25);
    doc.text("PISO: " + document.getElementById("piso").value, 10, 30);
    doc.text("ESTRUTURA: " + document.getElementById("estrutura").value, 10, 35);
    doc.text("FORRO: " + document.getElementById("forro").value, 10, 40);
    doc.text("ILUMINAÇÃO NATURAL: " + document.getElementById("iluminação_natural").value, 10, 45);
    doc.text("ILUMINAÇÃO ARTIFICIAL: " + document.getElementById("iluminação_artificial").value, 10, 50);
    doc.text("VENTILAÇÃO NATURAL: " + document.getElementById("ventilador_natural").value, 10, 55);
    doc.text("VENTILAÇÃO ARTIFICIAL: " + document.getElementById("ventilador_artificial").value, 10, 60);
    doc.text("FUNCIONÁRIO/FUNÇÃO: " + document.getElementById("funcionarios1").value + " - " + document.getElementById("atividades1").value, 10, 65);
    doc.text("FUNCIONÁRIO/FUNÇÃO: " + document.getElementById("funcionarios2").value + " - " + document.getElementById("atividades2").value, 10, 70);
    doc.text("FUNCIONÁRIO/FUNÇÃO: " + document.getElementById("funcionarios3").value + " - " + document.getElementById("atividades3").value, 10, 75);
    doc.text("FUNCIONÁRIO/FUNÇÃO: " + document.getElementById("funcionarios4").value + " - " + document.getElementById("atividades4").value, 10, 80);
    doc.text("MÁQUINAS E EQUIPAMENTOS - LUX: " + document.getElementById("myTextarea").value, 10, 85);
    
    //ruido
    if (ruido === 'ruidosim') {
        doc.text('Considerar ruído:', 10, 130);
        doc.text('Exposição: ' + exposicaoR, 10, 135);
        doc.text('Fonte geradora: ' + document.getElementById("fonteRuido").value, 10, 140);
    } else {
        doc.text('Não considerar ruído', 10, 130);
    }

    //radiaçao nao ionizante
    if (radiacaonaoion === 'radiacaoNaoIonsim') {
        doc.text('Considerar radiação não ionizante', 10, 150);
        doc.text('Exposição: ' + exposicaoRadNaoIon, 10, 155);
        doc.text('Fonte geradora: ' + document.getElementById("fonteRadiacaoNaoIon").value, 10, 160);
    } else {
        doc.text('Não considerar radiação não ionizante', 10, 150);
    }

    //radiação ionizante
    if (radion === 'radionsim') {
        doc.text('Considerar radiação ionizante', 10, 170);
        doc.text('Exposição: ' + exposicaoRI, 10, 175);
        doc.text('Fonte geradora: ' + document.getElementById("fonteRadIon").value, 10, 180);
    } else {
        doc.text('Não considerar radiação ionizante', 10, 170);
    }

    //Vibração
    if (vibracao === 'vibracaosim') {
        doc.text('Considerar vibração', 10, 190);
        doc.text('Exposição: ' + exposicaoV, 10, 195);
        doc.text('Fonte geradora: ' + document.getElementById("fonteVibracao").value, 10, 200);
    } else {
        doc.text('Não considerar vibração', 10, 190);
    }

    //Frio
    if (frio === 'friosim') {
        doc.text('Considerar frio', 10, 210);
        doc.text('Exposição: ' + exposicaoF, 10, 215);
        doc.text('Fonte geradora: ' + document.getElementById("fonteFrio").value, 10, 220);
    } else {
        doc.text('Não considerar frio', 10, 210);
    }
    
    //Calor
    if (calor === 'calorsim') {
        doc.text('Considerar calor', 10, 230);
        doc.text('Exposição: ' + exposicaoC, 10, 235);
        doc.text('Fonte geradora: ' + document.getElementById("fonteCalor").value, 10, 240);
    } else {
        doc.text('Não considerar calor', 10, 230);
    }

    //Umidade
    if (umidade === 'umidadesim') {
        doc.text('Considerar umidade', 10, 250);
        doc.text('Exposição: ' + exposicaoU, 10, 255);
        doc.text('Fonte geradora: ' + document.getElementById("fonteUmidade").value, 10, 260);
    } else {
        doc.text('Não considerar umidade', 10, 250);
    }

    //Poeira
    if (poeira === 'poeirasim') {
        doc.text('Considerar poeira', 10, 270);
        doc.text('Exposição: ' + exposicaoP, 10, 275);
        doc.text('Fonte geradora: ' + document.getElementById("fontePoeira").value, 10, 280);
    } else {
        doc.text('Não considerar poeira', 10, 270);
    }

    doc.addPage();

    //Fumos
    if (fumos === 'fumossim') {
        doc.text('Considerar fumos', 10, 10);
        doc.text('Exposição: ' + exposicaoFumos, 10, 15);
        doc.text('Fonte geradora: ' + document.getElementById("fonteFumos").value, 10, 20);
    } else {
        doc.text('Não considerar fumos', 10, 10);
    }

    //Gases
    if (gases === 'gasessim') {
        doc.text('Considerar gases', 10, 30);
        doc.text('Exposição: ' + exposicaoG, 10, 35);
        doc.text('Fonte geradora: ' + document.getElementById("fonteGases").value, 10, 40);
    } else {
        doc.text('Não considerar gases', 10, 30);
    }

    //Biológico
    if (biologico === 'biologicosim') {
        doc.text('Considerar biológico', 10, 50);
        doc.text('Exposição: ' + exposicaoB, 10, 55);
        doc.text('Fonte geradora: ' + document.getElementById("fonteBiologico").value, 10, 60);
    } else {
        doc.text('Não considerar biológico', 10, 50);
    }

    //Levantamento e transporte manual de peso
    if (transportedepeso === 'transportedepesosim') {
        doc.text('Considerar levantamento e transporte manual de peso', 10, 70);
        doc.text('Exposição: ' + exposicaoLET, 10, 75);
        doc.text('Fonte geradora: ' + document.getElementById("fontetransportedepeso").value, 10, 80);
    } else {
        doc.text('Não considerar levantamento e transporte manual de peso', 10, 70);
    }

    doc.text("Observações: " + document.getElementById("obsriscos").value, 10, 90);

    //controle de EPI
    if (controleEPI === 'controlesim') {
        doc.text('Existe controle de fichas de EPI', 10, 105);
    } else {
        doc.text('Não existe controle de fichas de EPI', 10, 105);
    }

    //Rota de fuga
    if (rotadefuga === 'rotadefugasim') {
        doc.text('Existe rota fuga', 10, 115);
    } else {
        doc.text('Não existe rota fuga', 10, 115);
    }

    //saida de emergencia
    if (saidadeemerg === 'saidadeemergsim') {
        doc.text('Existe saída de emergência', 10, 120);
    } else {
        doc.text('Não existe saída de emergência', 10, 120);
    }

    //iluminação de emergencia
    if (iluminacaoemerg === 'iluminacaoemergsim') {
        doc.text('Existe iluminação e sinalização de emergência', 10, 125);
    } else {
        doc.text('Não existe iluminação e sinalização de emergência', 10, 125);
    }

    //Extintores
    if (extintores === 'extintoressim') {
        doc.text('Existe extintores', 10, 130);
    } else {
        doc.text('Não existe extintores', 10, 130);
    }

    //Eletricidade
    if (eletricidade === 'eletricidadesim') {
        doc.text('Considerar eletricidade', 10, 70);
        doc.text('Exposição: ' + exposicaoeletricidade, 10, 75);
        doc.text('Fonte geradora: ' + document.getElementById("fonteletricidade").value, 10, 80);
    } else {
        doc.text('Não considerar eletricidade', 10, 70);
    }

    //Incêndio
    if (incendio === 'incendiosim') {
        doc.text('Considerar risco de incêndio ou explosão', 10, 70);
        doc.text('Exposição: ' + exposicaoincendio, 10, 75);
        doc.text('Fonte geradora: ' + document.getElementById("fonteincendio").value, 10, 80);
    } else {
        doc.text('Não considerar risco de incêndio ou explosão', 10, 70);
    }

    //queda de materiais 
    if (queda === 'quedasim') {
        doc.text('Considerar queda de materiais', 10, 70);
        doc.text('Exposição: ' + exposicaoqueda, 10, 75);
        doc.text('Fonte geradora: ' + document.getElementById("fontequeda").value, 10, 80);
    } else {
        doc.text('Não considerar queda de materiais', 10, 70);
    }

    // Salvar o PDF
    doc.save('levantamento.pdf');
    }