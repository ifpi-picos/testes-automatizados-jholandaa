 import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";
let conta1: ContaBancaria;
let conta2: ContaBancaria;

beforeEach(() => {
    conta1 = new ContaBancaria(12345, 1001);
    conta2 = new ContaBancaria(67890, 1002);
});

describe('Testes da Classe ContaBancaria', () => {
    test('Deve realizar um depósito corretamente', () => {
        conta1.depositar(500);
        expect(conta1.consultarSaldo()).toBe(500);
    });

    test('Deve realizar um saque corretamente', () => {
        conta1.depositar(500);
        conta1.sacar(200);
        expect(conta1.consultarSaldo()).toBe(300);
    });

    test('Deve transferir corretamente entre contas', () => {
        conta1.depositar(500);
        conta1.transferir(100, conta2);
        expect(conta1.consultarSaldo()).toBe(400);
        expect(conta2.consultarSaldo()).toBe(100);
    });

    test('Deve registrar as operações corretamente no extrato', () => {
        conta1.depositar(500);
        conta1.sacar(200);
        expect(conta1['extrato'].length).toBe(2); // Verifica se o extrato contém 2 operações
    });
});
