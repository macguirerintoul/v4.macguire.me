<template>
	<div>
		<h1>About</h1>
		<div class="about-container">
			<p>
				I'm Macguire — an experience designer, software developer, hackathon
				participant, and music producer. I'm currently completing a Bachelor of
				Science in Interactive Arts & Technology at Simon Fraser University.
				When I'm not studying or learning a new web framework, you can catch me
				DJing, making my own beats, or hiking the Swiss Alps with my mom.
			</p>
			<div class="about__photo">
				<g-image
					src="~/assets/images/portrait.jpg"
					alt="A photo of me."
					height="500"
				/>
			</div>
		</div>

		<section class="content resume">
			<h2>Work Experience</h2>

			<div class="resume__item">
				<h3>User Experience Design Intern</h3>
				<h4 class="resume__subtitle">Visier — May 2019 to present</h4>
				<ul class="resume__responsibilities">
					<li>
						create and improve data visualizations allowing Visier's 50,000
						users to analyze over 6 million employee records
					</li>
					<li>
						improve usability by designing interfaces and interactions that
						follow conventions and best practices
					</li>
					<li>
						collaborate with product and solution managers to understand use
						cases and user needs
					</li>
					<li>
						communicate design decisions and solve problems with developers to
						ship features and improvements
					</li>
				</ul>
			</div>

			<div class="resume__item">
				<h3>Systems Analyst</h3>
				<h4 class="resume__subtitle">
					Connections Lab — January 2019 to present
				</h4>
				<ul class="resume__responsibilities">
					<li>
						maintain the lab's RHEL server and software (Apache, phpMyAdmin,
						MySQL)
					</li>
					<li>maintain several WordPress and PMWiki instances</li>
					<li>modify plugins and themes to fit various requirements</li>
				</ul>
			</div>

			<div class="resume__item">
				<h3>Systems Analyst</h3>
				<h4 class="resume__company">
					Vancouver Coastal Health — September 2017 to March 2019
				</h4>
				<ul class="resume__responsibilities">
					<li>
						designed & developed web apps to support process improvement
					</li>
					<li>provided technical recommendations for digital projects</li>
					<li>
						designed & developed several websites to support staff education
					</li>
					<li>
						prototyped VR projects for Cardboard and Oculus Go
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>
<script>
export default {
	metaInfo: {
		title: "About"
	}
};
</script>
