const { Engine, Render, World, Bodies } = Matter;
let engine, render, ball, ground;

document.addEventListener("DOMContentLoaded", function() {
    initAnimation();

    document.getElementById('restartButton').addEventListener('click', function() {
        Matter.Engine.clear(engine);
        Matter.Render.stop(render); // Detenemos el render
        render.canvas.remove(); // Eliminamos el canvas actual
        render.context = null; // Limpiamos el contexto del render
        render.textures = {}; // Limpiamos las texturas del render
        initAnimation();
    });
});

function initAnimation() {
    engine = Engine.create();
    render = Render.create({
        element: document.getElementById('animation'),
        engine: engine,
        options: {
            width: 600,
            height: 400,
            wireframes: false
        }
    });

    ball = Bodies.circle(300, 0, 20, {
        density: 0.04,
        frictionAir: 0.006,
        restitution: 0.9,
        friction: 0.01,
        render: {
            fillStyle: 'pink',
            strokeStyle: 'pink',
            lineWidth: 13
        }
    });

    ground = Bodies.rectangle(300, 390, 600, 20, {
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


