const { Engine, Render, World, Bodies } = Matter;
let engine, render, ball, ground;

document.addEventListener("DOMContentLoaded", function() {
    initAnimation();

    document.getElementById('restartButton').addEventListener('click', function() {
        Matter.Engine.clear(engine);
        Matter.Render.stop(render); 
        render.canvas.remove();     // current canvas removed here
        render.context = null;      // context cleaned
        render.textures = {};       // render's textures cleaned
        initAnimation();
    });
});

function initAnimation() {
    engine = Engine.create();
    render = Render.create({
        element: document.getElementById('animation'),
        engine: engine,
        options: {
            width: 300,
            height: 370,
            wireframes: false
        }
    });

    ball = Bodies.circle(150, 0, 25, {
        density: 0.03,
        frictionAir: 0.003,
        restitution: 0.9,
        friction: 0.01,
        render: {
            fillStyle: 'pink',
            strokeStyle: 'pink',
            lineWidth: 7
        }
    });

    ground = Bodies.rectangle(300, 385, 600, 160, {
        isStatic: true,
        render: {
            fillStyle: 'pink',
            strokeStyle: 'pink',
            lineWidth: 0
        }
    });

    World.add(engine.world, [ball, ground]);
    Engine.run(engine);
    Render.run(render);
}


