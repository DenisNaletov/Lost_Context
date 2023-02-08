// Вариант 3 - через передачу this в новую переменную внутри функции showList

let group =
    {
        title: 'Java 19',
        students: ['Gena', 'Andrey', 'Elena', 'Anton'],
        showList: function ()
        {
            let self = this;
            const show = function (name)
            {
                console.log(`${self.title}: ${name}`)
            }
            this.students.forEach(show.bind(this))
        }
    }

group.showList()
let newGroup = group
group = null
newGroup.showList()