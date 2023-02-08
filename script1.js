// Вариаент 2 - стрелочная функция

let group =
    {
        title: 'Java 19',
        students: ['Gena', 'Andrey', 'Elena', 'Anton'],
        showList: function ()
        {
            const show =  (name) =>
            {
                console.log(`${this.title}: ${name}`)
            }
            this.students.forEach(show)
        }
    }

group.showList()
let newGroup = group
group = null
newGroup.showList()