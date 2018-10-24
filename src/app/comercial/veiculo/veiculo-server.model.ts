import { Cliente } from './../clientes/cliente.model';
import { ModeloServer } from './../../modelo/modeloserver.model';
import { Marca } from './../../marcas/marca.model';
import { AnoModeloServer } from '../../ano-modelo/ano-modelo-server.model';
import { Component, Input, OnInit } from '@angular/core';
export interface VeiculoServer {

id?: number ;

cliente?: Cliente;
cor?: string;
chassi?: string;
ativo?: boolean;
placa?: string;
renavam?: string;
nummotor?: string;
combustivel?: string;
km?: number;
volume?: number;
pesomax?: number;
altura?: number;
comprimento?: number;
categoria?: string;
potencia?: string;
portas?: number;
marca?: Marca;
modelo?: ModeloServer;
anomodelo?: AnoModeloServer;
version?: number;



}
