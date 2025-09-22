<script lang="ts">
	import { t } from '$lib/translation';
	import { Facebook } from 'lucide-svelte';
</script>

<footer class="bg-[#111111] py-16">
	<div class="container mx-auto px-4 lg:px-8">
		<div class="space-y-16">
			<!-- Footer Content -->
			<div class="grid grid-cols-1 lg:grid-cols-12 gap-20">
				<!-- Brand Section -->
				<div class="lg:col-span-5 space-y-8">
					<div class="space-y-6">
						<h3
							class="text-[#edff8c] text-3xl lg:text-4xl font-bold font-satoshi"
							style="letter-spacing: 1.5px;"
						>
							BOOKIPER
						</h3>
						<p class="text-[#fafafa] text-lg max-w-lg font-dm-sans" style="letter-spacing: 1px;">
							{$t('home.footer.description')}
						</p>
					</div>
					<!-- Social Media -->
					<div class="flex gap-6">
						<Facebook
							class="w-11 h-11 p-2 bg-blue-600 fill-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
						/>
						<img
							src="/images/logos_whatsapp-icon.png"
							alt="WhatsApp"
							class="w-11 h-11 hover:opacity-80 transition-opacity cursor-pointer"
						/>
						<img
							src="/images/instagram.png"
							alt="Instagram"
							class="w-11 h-11 hover:opacity-80 transition-opacity cursor-pointer"
						/>
					</div>
				</div>

				<!-- Menu Links -->
				<div class="lg:col-span-3 space-y-12">
					<!-- Menu -->
					<div class="space-y-6">
						<h4 class="text-[#fafafa] text-xl font-bold font-satoshi">
							{$t('home.footer.menu_title')}
						</h4>
						<nav class="space-y-4">
							<a href="#home" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
								>{$t('home.menu.home')}</a
							>
							<a
								href="#how-we-work"
								class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
								>{$t('home.menu.how_we_work')}</a
							>
							<a
								href="#services"
								class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
								>{$t('home.menu.services')}</a
							>
							<a href="#about" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
								>{$t('home.menu.about')}</a
							>
						</nav>
					</div>

					<!-- Contact - Directly below Menu -->
					<div class="space-y-6">
						<h4 class="text-[#fafafa] text-xl font-bold font-satoshi">
							{$t('home.footer.contact_title')}
						</h4>
						<div class="space-y-4 text-[#fafafa]">
							<div class="flex gap-4">
								<span class="font-medium min-w-[60px]">{$t('home.contact.phone')}:</span>
								<span>+12 123 345 67</span>
							</div>
							<div class="flex gap-4">
								<span class="font-medium min-w-[60px]">{$t('home.contact.email')}:</span>
								<span>bookiper@gmail.com</span>
							</div>
							<div class="flex gap-4">
								<span class="font-medium min-w-[70px]">{$t('home.contact.address')}:</span>
								<span>Lisa Simpson, 742 Evergreens</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Resources Links -->
				<div class="lg:col-span-4 space-y-6">
					<h4 class="text-[#fafafa] text-xl font-bold font-satoshi">
						{$t('home.footer.resources_title')}
					</h4>
					<nav class="space-y-4">
						<a
							href="#testimonials"
							class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>{$t('home.resources.testimonials')}</a
						>
						<a href="#pricing" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>{$t('home.menu.pricing')}</a
						>
						<a href="#faq" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>{$t('home.resources.faq')}</a
						>
						<a href="#contact" class="block text-[#fafafa] hover:text-[#edff8c] transition-colors"
							>{$t('home.resources.free_consultation')}</a
						>
					</nav>
				</div>
			</div>

			<!-- Footer Bottom -->
			<div
				class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-4 pt-8 border-t border-[#333]"
			>
				<p
					class="text-[#fafafa] text-center sm:text-left font-dm-sans"
					style="letter-spacing: 1.5px;"
				>
					{$t('home.footer.copyright')}
				</p>
				<div class="flex flex-col items-start sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
					<a
						href="#privacy"
						class="text-[#fafafa] underline hover:text-[#edff8c] transition-colors font-dm-sans"
						style="letter-spacing: 1.5px;"
					>
						{$t('home.footer.privacy_policy')}
					</a>
					<a
						href="#terms"
						class="text-[#fafafa] underline hover:text-[#edff8c] transition-colors font-dm-mono"
						style="letter-spacing: 1.5px;"
					>
						{$t('home.footer.terms_of_service')}
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>
