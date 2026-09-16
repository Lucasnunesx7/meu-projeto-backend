/*
A palavra-chave "export" é usada para exportar a classe Player,
permitindo que seja importada e utilizada em outros arquivos do projeto.
A palavra-chave "class" é usada para definir uma classe em TypeScript.
*/

export class Player {
    /* A palavra-chave "public" é usada para definir propriedades
    públicas da classe, que podem ser acessadas de fora da classe. */
    public name: string; // O nome do player (texto)
    public health: number; // A saúde do player (número)
    public level: number; // O nível do player (número)

    // CONSTRUTOR DA CLASSE PLAYER
    /* O construtor é um método especial que é chamado 
    quando uma nova instância da classe é criada. */
    constructor(name: string, health: number = 100, level: number = 1) {
        /* A palavra-chave "this" é usada para se referir à instância atual
        da classe. */
        this.name = name; // Inicializa o nome do player
        this.health = health; // Inicializa a saúde do player
        this.level = level; // Inicializa o nível do player
    }

    // MÉTODOS DA CLASSE PLAYER
    /* Métodos são funções que pertencem a uma classe e podem ser
    chamadas em instâncias dessa classe. */
    
    // O método "attack" é usado para atacar outro player, reduzindo sua saúde.
    public attack(): string {
        // Calcula o dano com base no nível do player
        const damage = this.level * 10;
        /* A palavra-chave "return" é usada para retornar
        um valor de uma função ou método. */
        return `O player ${this.name} atacou e causou ${damage} de dano!`;
    }

    /* O método "takeDamage" é usado para receber dano de outro player,
    reduzindo a saúde do player. */
    public takeDamage(damage: number): string {
        // Reduz a saúde do player com base no dano recebido.
        this.health -= damage;
        // Verifica se a saúde do player caiu para 0 ou menos
        if (this.health <= 0) {
            this.health = 0; // Garante que a saúde não fique negativa
            return `O player ${this.name} foi derrotado!`;
        }
        return `O player ${this.name} recebeu ${damage} de dano e agora tem ${this.health} de saúde!`;
    }

    public heal(healAmount: number): string {
        this.health += healAmount;
        if (this.health > 100) {
            this.health = 100; // Garante que a saúde não ultrapasse 100
        }
        return `O player ${this.name} se curou e agora tem ${this.health} de saúde!`;
    }
}