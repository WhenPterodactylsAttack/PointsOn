const namespace = "PointsOn";
const key = "views";

updateNumberViews();

function updateNumberViews()
{
    fetch(`https://api.countapi.xyz/update/${namespace}/${key}/?amount=1`)
        .then(response => response.json())
        .then(response => { document.getElementById('view-counter').innerHTML = response.value; });
}
