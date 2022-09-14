//Представьте, что мы разрабатываем игру «Змейка». Реализуйте метод столкновения для головы змейки, для клетки с едой и для клетки с препятствием.

class Cell { //Класс клетка
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    collide(cell) {
        if (this.x === cell.x && this.y === cell.y) {
            this.bump(cell)
        }
    }

    bump(cell) {
    }

    destroy() {
        // убирает клетку
    }
}


class SnakeTail extends Cell { //Хвост змейки
}

class SnakeHead extends Cell { //Голова змейки
    score = 0
    lives = 3

    bump(cell) { //Столкновение для головы змейки
        // при столкновении с хвостом или препятствием стоит уменьшить количество жизней змейки (пока можно не беспокоиться о завершении игры)
        // при столкновении с едой - увеличить счёт
        //Реализуйте метод столкновения для головы змейки, для клетки с едой и для клетки с препятствием.
        if (cell instanceof SnakeTail || cell instanceof Border) {
            this.lives -= 1 //при столкновении с хвостом или препятствием стоит уменьшить количество жизней змейки
        }

        if (cell instanceof Food) {
            this.score += 1 // при столкновении с едой - увеличить счёт
        }
    }
}

class Border extends Cell {
}

class Food extends Cell {
    bump(cell) {
        // при столкновении с головой змейки убирать еду
        if (cell instanceof SnakeHead) {
            this.destroy()
        }
    }
}

class Game {
    play() {
        const snake = new SnakeHead(0, 0)
        // генерация препятствий и еды, движения змейки...
        const food = new Food(10, 10)
        const border = new Border(4, 35)
        const tail = new SnakeTail(0, 1)

        const items = [snake, food, border, tail, ...]
        for (item1 of items) {
            for (item2 of items) {
                if (item1 !== item2) {
                    item1.collide(item2)
                    item2.collide(item1)
                }
            }
        }
    }
}