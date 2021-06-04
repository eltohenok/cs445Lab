const { from } = rxjs;
const { map, filter } = rxjs.operators;

window.onload = async function() {
    document.getElementById('empsBtn').onclick = function() {
        const employeeDiv = document.getElementById('employee-list');
        employeeDiv.innerHTML = '';
        let len = document.getElementById('empListLength').value;
        let result = await fetch('https://randomuser.me/api/?results=' + len).then(response => response.json()).then(json => json.results);
        from(result)
            .pipe(
                filter(user => user.gender == 'female'),
                map(user => {
                    user.myname = user.name.first + ' ' + user.name.last;
                    user.mylocation = {};
                    user.mylocation.firstline = user.location.street.number + ' ' + user.location.street.name;
                    user.mylocation.secondline = user.location.city + ' ' + user.location.state + ' ' + user.location.country + ' ' + user.location.postcode;
                    return user;
                })
            )
            .subscribe(user => {
                let template = `     
                <div class="col">
                    ${user.myname}
                </div>
                <div class="col">
                    <h3>Location</h3>
                    <p>${user.mylocation.firstline}</p>
                    <p>${user.mylocation.secondline}</p>
                </div>     
            `;
                const div = document.createElement('div');
                div.classList = 'row border-top';
                div.innerHTML = template;
                employeeDiv.appendChild(div);

            });
    }

}