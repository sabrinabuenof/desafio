import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'lista_tarefa',
    templateUrl: './lista_tarefa.component.html',
    styleUrls: ['./lista_tarefa.component.css']
})

export class ListaTarefaComponent implements OnInit {

    novaTarefa: any;
    objStatus: any = [
        { nome: "Pendente", value: "0" },
        { nome: "Concluído", value: "1" }
    ]
    selectStatus: any;


    ngOnInit(): void {
        console.log("nova tarefa")
        console.log(this.novaTarefa)
        this.selectStatus = this.objStatus[0].value

    }
}


