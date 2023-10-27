(() => {
const start = document.querySelector('#start');
const finish = document.querySelector('#finish');
const topic = document.querySelector('#topic');

async function retrieve() {
    const startDate = start.value.replaceAll('-', '');
    const finishDate = finish.value.replaceAll('-', '');
    const topicValue = topic.value.replaceAll(' ', '_');
    const baseUrl = `https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/pt.wikipedia/all-access/all-agents/${topicValue}/daily/${startDate}/${finishDate}`

    const response = await fetch(baseUrl);
    const json = await response.json();
    return json;
}

document.querySelector('#submit').onclick = async () => {
    const json = await retrieve();
    console.log(json);
}
})();