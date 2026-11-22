import { For, onMount, onCleanup } from "solid-js";

const Carousel = (props) => {
  const items = () => [...props.items, ...props.items];
  const dir = () => (props.direction === "right" ? 1 : -1);

  let trackRef;
  let offset = 0;
  let frame = 0;

  let isDragging = false;
  let startX = 0;
  let startOffset = 0;
  let lastX = 0;
  let lastTime = 0;
  let dragVelocity = 0;
  let axis: "unknown" | "x" | "y" = "unknown";

  const AUTO_SPEED = 0.4;
  const MAX_VELOCITY = 25;
  const VELOCITY_BOOST = 1.4;
  const FRICTION = 0.85;
  const AXIS_THRESHOLD = 8;

  let currentSpeed = AUTO_SPEED * dir();

  onMount(() => {
    const tick = () => {
      if (trackRef) {
        const base = AUTO_SPEED * dir();

        if (!isDragging) {
          currentSpeed = currentSpeed * FRICTION + base * (1 - FRICTION);
          if (Math.abs(currentSpeed - base) < 0.01) {
            currentSpeed = base;
          }
          offset -= currentSpeed;
        }

        const secondHalfStart = trackRef.children[props.items.length];
        if (secondHalfStart) {
          const half = secondHalfStart.offsetLeft;
          if (half > 0) {
            if (-offset >= half) offset += half;
            if (offset > 0) offset -= half;
          }
        }

        trackRef.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
  });

  onCleanup(() => cancelAnimationFrame(frame));

  const onPointerDown = (e) => {
    isDragging = true;
    startX = e.clientX;
    startOffset = offset;
    lastX = e.clientX;
    lastTime = performance.now();
    dragVelocity = 0;
    axis = "unknown";
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;

    if (axis === "unknown") {
      if (Math.abs(dx) > AXIS_THRESHOLD) {
        axis = "x";
        e.currentTarget.setPointerCapture(e.pointerId);
      } else {
        return;
      }
    }

    if (axis !== "x") return;

    e.preventDefault();
    offset = startOffset + dx;

    const now = performance.now();
    const dt = now - lastTime;
    if (dt > 0) {
      dragVelocity = ((e.clientX - lastX) / dt) * 16;
    }
    lastX = e.clientX;
    lastTime = now;
  };

  const onPointerUp = (e) => {
    if (!isDragging) return;
    isDragging = false;

    if (axis === "x") {
      const boosted = dragVelocity * VELOCITY_BOOST;
      const clamped = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, boosted));
      currentSpeed = -clamped;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
    axis = "unknown";
  };

  return (
    <div class="w-full overflow-hidden select-none py-8">
      <h2 class="text-white font-display font-black uppercase tracking-[0.3em] text-center text-sm mb-6">
        {props.title}
      </h2>

      <div
        class="relative cursor-grab active:cursor-grabbing overscroll-x-contain"
        style={{ "touch-action": "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div ref={trackRef} class="flex gap-8 will-change-transform items-start">
          <For each={items()}>
            {(item) => (
              <div class="flex-shrink-0 pointer-events-none">
                <div class="h-64 rounded-3xl overflow-hidden relative shadow-2xl bg-black/30">
                  <img
                    src={item.image}
                    alt={item.name}
                    class="h-64 w-auto max-w-none block"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                  <div class="absolute bottom-0 left-0 right-0 p-6">
                    <p class="text-white font-display font-black text-lg uppercase tracking-tight leading-none">
                      {item.name}
                    </p>
                    <p class="text-white font-display font-black text-xs uppercase tracking-[0.2em] leading-none mt-1">
                      {item.artist}
                    </p>
                    <p class="text-white/60 font-display font-bold text-xs uppercase tracking-[0.2em] leading-none mt-3">
                      {item.meta}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Carousel;