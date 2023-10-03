document.addEventListener("DOMContentLoaded", function() {
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
            fillStyle: '#F35e66',
            strokeStyle: 'black',
            lineWidth: 1
        }
    });

    World.add(engine.world, [ball]);
    Engine.run(engine);
    Render.run(render);

    Events.on(engine, 'afterUpdate', function() {
        if (ball.position.y > render.canvas.height + 20) {
            Matter.Body.setPosition(ball, {x: 300, y: -20});
        }
    });
});
