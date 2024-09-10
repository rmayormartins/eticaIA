document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const scenarioSection = document.getElementById('scenario');
    const resultsSection = document.getElementById('results');
    let scenarios = [];
    let currentScenario = 0;

    // Carregar cenários
    fetch('scenarios/data.json')
        .then(response => response.json())
        .then(data => {
            scenarios = data;
        })
        .catch(error => console.error('Erro ao carregar cenários:', error));

    startBtn.addEventListener('click', startScenarios);

    function startScenarios() {
        document.getElementById('home').classList.add('hidden');
        showScenario(currentScenario);
    }

    function showScenario(index) {
        if (index >= scenarios.length) {
            showResults();
            return;
        }

        const scenario = scenarios[index];
        scenarioSection.classList.remove('hidden');
        document.getElementById('scenario-title').textContent = scenario.title;
        document.getElementById('scenario-description').textContent = scenario.description;

        const optionsDiv = document.getElementById('scenario-options');
        optionsDiv.innerHTML = '';
        scenario.options.forEach((option, i) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => selectOption(i));
            optionsDiv.appendChild(button);
        });
    }

    function selectOption(optionIndex) {
        // Aqui você pode salvar a escolha do usuário
        currentScenario++;
        showScenario(currentScenario);
    }

    function showResults() {
        scenarioSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        // Implemente a lógica para mostrar os resultados
    }
});
