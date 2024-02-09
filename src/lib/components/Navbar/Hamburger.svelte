<script>
	export let opened = false;
</script>

<button
	aria-label="menu-burger-button"
	class:opened
	on:click={() => (opened = !opened)}
>
	<svg width="32" height="24">
		<line id="top" x1="0" y1="2" x2="32" y2="2" />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" />
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
	}

	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out;
	}

	button {
		color: white;
		background: transparent;
		border: transparent;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 20;
	}

	.opened svg {
		transform: scale(0.7);
	}

	.opened #top {
		transform: translate(6px, 0px) rotate(45deg);
	}

	.opened #middle {
		stroke-dasharray: 0;
		stroke-dashoffset: 0;
		animation: fade 1s ease-in alternate forwards;
	}

	@keyframes fade {
		to {
			stroke-dashoffset: 1000;
			stroke-dasharray: 1000;
		}
	}

	.opened #bottom {
		transform: translate(-12px, 9px) rotate(-45deg);
	}
</style>
