<script>
    var text = ["Survival", "Survival", "Survival", "Survival", "Survival", "Survival", "Survival", "Survival", "Survival", "Survival", "Surviva", "Surviv", "Survi", "Surv", "Sur", "Su", "S", " ", "P", "Po", "Poc", "Pock", "Pocke", "Pocket ", "Pocket E", "Pocket Ed", "Pocket Edi", "Pocket Edit", "Pocket Editi", "Pocket Editio", "Pocket Edition", "Pocket Edition", "Pocket Edition", "Pocket Edition", "Pocket Edition", "Pocket Edition", "Pocket Edition", "Pocket Edition", "Pocket Edition", "Pocket Edition", "Pocket Editio", "Pocket Editi", "Pocket Edit", "Pocket Edi", "Pocket Ed", "Pocket E", "Pocket ", "Pocket", "Pocke", "Pock", "Poc", "Po", "P", " ", "P", "PV", "PVP", "PVP", "PVP", "PVP", "PVP", "PVP", "PVP", "PVP", "PVP", "PVP", "PV", "P", " ", "R", "Ra", "Rai", "Raid", "Raidi", "Raidin", "Raiding", "Raiding", "Raiding", "Raiding", "Raiding", "Raiding", "Raiding", "Raiding", "Raiding", "Raiding", "Raidin", "Raidi", "Raid", "Rai", "Ra", "R", " ", "P", "PV", "PVE", "PVE", "PVE", "PVE", "PVE", "PVE", "PVE", "PVE", "PVE", "PVE", "PV", "P", " ", "J", "Ja", "Jav", "Java", "Java", "Java", "Java", "Java", "Java", "Java", "Java", "Java", "Java", "Jav", "Ja", "J", " ", "B", "Be", "Bed", "Bedr", "Bedro", "Bedroc", "Bedrock", "Bedrock", "Bedrock", "Bedrock", "Bedrock", "Bedrock", "Bedrock", "Bedrock", "Bedrock", "Bedrock", "Bedroc", "Bedro", "Bedr", "Bed", "Be", "B"];
    var counter = 0;
    var elem = document.getElementById("changeText");
    setInterval(change, 100);
        function change() {
        elem.innerHTML = text[counter];
            counter++;
            if (counter >= text.length) {counter = 0; }
        }
    </script>