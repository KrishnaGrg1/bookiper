<script>
	// Replace this array with your actual company data
	const companies = [
		{ name: 'CoVet', img: '/images/CoVet-Logo-hz_ko.avif' },
		{ name: 'Skyline Innovation', img: '/images/skylineInovation.jpeg' },
		{ name: 'Immobilier', img: '/images/immobilier.png' },
		{ name: 'Yucheng', img: '/images/yucheng.png' },
		{ name: 'Huafang', img: '/images/huafang.png' },
		{ name: 'Maxresdefault', img: '/images/maxresdefault.jpg' }
	];
</script>

<!-- Logo Scroll Container -->
<div class="overflow-hidden relative">
	<!-- Scrolling logos -->
	<div class="logo-scroll flex gap-6 items-center">
		<!-- First set of logos -->
		<div class="flex gap-6 items-center flex-shrink-0">
			{#each companies as company}
				<div class=" rounded-xl h-12 w-32 flex items-center justify-center">
					<img
						src={company.img}
						class="min-w-[8rem] h-12 object-contain"
						alt={company.name}
						loading="lazy"
					/>
				</div>
			{/each}
		</div>

		<!-- Duplicate set for seamless loop -->
		<div class="flex gap-6 items-center flex-shrink-0">
			{#each companies as company}
				<div class=" rounded-xl h-12 w-32 flex items-center justify-center">
					<!-- <span>{company.name}</span> -->
					<img
						src={company.img}
						alt={company.name}
						class="min-w-[8rem] h-12 object-contain"
						loading="lazy"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.logo-scroll {
		animation: scroll 30s linear infinite;
	}

	.logo-scroll:hover {
		animation-play-state: paused;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
