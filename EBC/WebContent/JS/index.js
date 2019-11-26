var dataSet = [
    [ "Tiger Nixon", 		"2019/01/20", "$1,800", "Activo", "12345", "Materia 1", '<a href="#" class="glyphicon glyphicon-refresh">CRM</a>' ],
    [ "Garrett Winters", 	"2019/02/21", "$2,300",	"Activo", "13522", "Materia 2", '<a href="#" class="glyphicon glyphicon-refresh">RP</a>' ],
    [ "Ashton Cox", 		"2019/03/22", "$1,800", "Activo", "16903", "Materia 1",  ''  ],
    [ "Cedric Kelly",		"2019/04/23", "$1,500", "Activo", "20201", "Materia 4", '<a href="#" class="glyphicon glyphicon-refresh">CRM</a>' ],
    [ "Airi Satou", 		"2019/05/24", "$2,600", "Activo", "40233", "Materia 3", '<a href="#" class="glyphicon glyphicon-refresh">CRM</a>' ],
    [ "Brielle Williamson", "2019/06/25", "$3,000", "Activo", "03423", "Materia 8", '<a href="#" class="glyphicon glyphicon-refresh">RP</a>' ],
    [ "Herrod Chandler", 	"2019/07/26", "$1,800", "Activo", "49392", "Materia 1", '<a href="#" class="glyphicon glyphicon-refresh">RP</a>' ],
    [ "Rhona Davidson", 	"2019/08/27", "$1,800", "Activo", "90235", "Materia 3", '<a href="#" class="glyphicon glyphicon-refresh">RP</a>' ],
    [ "Jena Gaines", 		"2019/09/28", "$2,300", "Activo", "92034", "Materia 7", ''   ],
    [ "Colleen Hurst", 		"2019/10/29", "$1,500", "Activo", "12322", "Materia 2", '<a href="#" class="glyphicon glyphicon-refresh">CRM</a>'  ],
    [ "Sonya Frost", 		"2019/11/30", "$2,300", "Activo", "43455", "Materia 9", '<a href="#" class="glyphicon glyphicon-refresh">RP</a>'  ],
    [ "Quinn Flynn", 		"2019/12/10", "$3,000", "Activo", "34522", "Materia 7", '<a href="#" class="glyphicon glyphicon-refresh">RP</a>'  ],
    [ "Jena Gaines", 		"2019/01/11", "$3,000", "Activo", "89233", "Materia 4", ''   ],
    [ "Haley Kennedy", 		"2019/02/12", "$1,500", "Activo", "56767", "Materia 3", '<a href="#" class="glyphicon glyphicon-refresh">CRM</a>'  ],
    [ "Tatyana Fitzpatrick","2019/03/13", "$1,800", "Activo", "90238", "Materia 5", '<a href="#" class="glyphicon glyphicon-refresh">CRM</a>'  ]
];
 
$(document).ready(function() {
    $('#dataTable').DataTable( {
        data: dataSet,
        columns: [
            { title: "Nombre"        },
            { title: "Fecha de Pago" },
            { title: "Monto de Pago" },
            { title: "Estatus"       },
            { title: "NRC"           },
            { title: "Materia"       },
            { title: ''              }
        ]
    } );
} );