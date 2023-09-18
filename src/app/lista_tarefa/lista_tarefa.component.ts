import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'lista_tarefa',
    templateUrl: './lista_tarefa.component.html',
    styleUrls: ['./lista_tarefa.component.css']
})

export class ListaTarefaComponent implements OnInit {

    nomeTarefa: string = "";
    listaTarefas: any [] = [];
    selectStatus: any;
    indice: number = 0;
    acaoEditar = "EDITAR"
    acaocCadastrar = "CADASTRAR"
    acao: string = "Novo"

    listaStatus: any = [
        { nome: "Pendente", value: "0" },
        { nome: "Concluído", value: "1" }
    ]

    constructor() {
        this.selectStatus = this.listaStatus[0].value;
    }

    ngOnInit(): void {
        this.acao = this.acaocCadastrar
    }

    adicionarTarefas(){   
        console.log(this.selectStatus);
        let objTarefa = {
            nome: this.nomeTarefa,
            status: this.selectStatus
        }
        this.listaTarefas.push(objTarefa);
        this.nomeTarefa = "";
    }

    carregarTarefa(tarefa: any){
        this.indice         = this.listaTarefas.findIndex(t => t == tarefa)
        this.nomeTarefa     = tarefa.nome
        this.selectStatus   = tarefa.status
        this.acao           = this.acaoEditar
    }

    editar(){
        let objTarefa = {
            nome: this.nomeTarefa,
            status: this.selectStatus
        }
        this.listaTarefas[this.indice] = objTarefa;
        this.acao = this.acaocCadastrar
        this.nomeTarefa = "";
        this.selectStatus = this.listaStatus[0].value;
    }


    excluir(nomeTarefa: any){
        this.listaTarefas   = this.listaTarefas.filter(t => t.nome !== nomeTarefa);
        this.acao           = this.acaocCadastrar
       
    }
}


