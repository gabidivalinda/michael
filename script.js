function nextStep(stepId) {
    // Esconde todos os passos
    document.querySelectorAll('.flowchart').forEach(function(step) {
        step.style.display = 'none';
    });

    // Exibe o próximo passo
    document.getElementById(stepId).style.display = 'block';
}
