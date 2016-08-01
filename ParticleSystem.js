function ParticleSystem(num,position){
	this.origin = position.copy();
	this.particles = [];
	for(var i = 0; i<num; i++){
		this.particles.push(new Particle(this.origin))
	}

	this.run = function(){
		console.log("run particle system");
		for(var i = this.particles.length-1; i>=0;i--){
			var p = this.particles[i];
			p.run();
			if(p.isDead()){
				this.particles.splice(i,1);
			}
		}
	};

	this.addParticle = function(){
		this.particles.push(new Particle(this.origin));
	};
}