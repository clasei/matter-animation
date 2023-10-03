document.addEventListener("DOMContentLoaded", function() {
    initAnimation();

    document.getElementById('restartButton').addEventListener('click', function() {
        Matter.Engine.clear(engine); // limpia el motor de matter para reiniciar
        initAnimation();
        });
    });

    const { Engine, Render, World, Bodies } = Matter;

    const engine = Engine.create();
    const render = Render.create({
        element: document.getElementById('animation'),
        engine: engine,
        options: {
            width: 600,
            height: 400,
            wireframes: false
        }
    });

    const ball = Bodies.circle(300, 0, 20, {
        density: 0.04,
        frictionAir: 0.006,
        restitution: 0.9,
        friction: 0.01,
        render: {
            fillStyle: 'white',
            strokeStyle: 'white',
            lineWidth: 7
        }
    });

    // creamos el suelo
    const ground = Bodies.rectangle(300, 390, 600, 20, {
        isStatic: true,
        render: {
            fillStyle: 'pink',
            strokeStyle: 'black',
            lineWidth: 0
        }
    });

    World.add(engine.world, [ball, ground]);
    Engine.run(engine);
    Render.run(render);

}
