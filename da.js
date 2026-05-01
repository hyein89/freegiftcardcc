$(document).ready(function() {
    $('#year').text(new Date().getFullYear());

    fetch('config.json')
        .then(response => response.json())
        .then(data => {
            document.title = data.sitename;
            $('#sitename').text(data.sitename);
            $('#domain').text(data.domain);
        })
        .catch(error => console.error(error));
});
