function Robot(name, action) {
	this.name = name;
	this.action = action;

	this.work = function() {
		console.log("Я " + this.name + " – я " + this.action);
	}
}

function CoffeRobot(name, action) {
	Robot.call(this);

	this.name = name;
	this.action = action;
}

function RobotDancer(name, action) {
	Robot.call(this);

	this.name = name;
	this.action = action;
}

function RobotCooker(name, action) {
	Robot.call(this);

	this.name = name;
	this.action = action;
}

var robot = new Robot("Robot", "просто працюю");
robot.work();

var coffeRobot = new CoffeRobot("CoffeRobot", "варю каву");
coffeRobot.work();

var robotDancer = new RobotDancer("RobotDancer", "просто танцюю");
robotDancer.work();

var robotCooker = new RobotCooker("RobotCoocker", "просто готую");
robotCooker.work();

console.log('---------------------------------------------------');

var robots = [ new Robot("Robot", "просто працюю"),
		new CoffeRobot("CoffeRobot", "варю каву"),
		new RobotDancer("RobotDancer", "просто танцюю"),
		new RobotCooker("RobotCoocker", "просто готую") ]

for (var i = 0; i < robots.length; i++) {
	robots[i].work();
}