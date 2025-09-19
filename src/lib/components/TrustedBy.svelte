<script>
	// Replace this array with your actual company data
	const companies = [
		{ name: 'Company 1', url: 'none' },
		{ name: 'Company 2', url: 'none' },
		{ name: 'Company 3', url: 'none' },
		{ name: 'Company 4', url: 'none' },
		{ name: 'Company 5', url: 'none' },
		{ name: 'Company 6', url: 'none' }
	];
</script>

<!-- Logo Scroll Container -->
<div class="overflow-hidden relative">
	<!-- Scrolling logos -->
	<div class="logo-scroll flex gap-6 items-center">
		<!-- First set of logos -->
		<div class="flex gap-6 items-center flex-shrink-0">
			{#each companies as company}
				<a
					target="_blank"
					rel="noopener noreferrer"
					class="hover:opacity-70 transition-opacity cursor-pointer"
					aria-label={`Visit ${company.name} website`}
				>
					<div class="bg-[#aaaaaa] rounded-xl h-12 w-32 flex items-center justify-center">
						<!-- <span>{company.name}</span> -->
						<!-- <img src="" alt="Professional woman" class="w-32 h-12 object-contain" /> -->
					</div>
				</a>
			{/each}
		</div>

		<!-- Duplicate set for seamless loop -->
		<div class="flex gap-6 items-center flex-shrink-0">
			{#each companies as company}
				<a
					target="_blank"
					rel="noopener noreferrer"
					class="hover:opacity-70 transition-opacity cursor-pointer"
					aria-label={`Visit ${company.name} website`}
				>
					<div class="bg-[#aaaaaa] rounded-xl h-12 w-32 flex items-center justify-center">
						<!-- <span>{company.name}</span>
						<img src="" alt="" /> -->
					</div>
				</a>
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
