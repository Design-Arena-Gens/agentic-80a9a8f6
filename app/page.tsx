'use client';

import { useState } from 'react';
import { CheckCircle2, Circle, BookOpen, Target, Brain, Zap, Award, Clock, TrendingUp } from 'lucide-react';

interface DayPlan {
  day: number;
  phase: string;
  topic: string;
  hours: {
    theory: number;
    practical: number;
    review: number;
  };
  objectives: string[];
  karmaApproach: string;
  ayankojiApproach: string;
  tasks: string[];
  resources: string[];
}

export default function Home() {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [activeDay, setActiveDay] = useState<number | null>(null);

  const toggleDay = (day: number) => {
    if (completedDays.includes(day)) {
      setCompletedDays(completedDays.filter(d => d !== day));
    } else {
      setCompletedDays([...completedDays, day]);
    }
  };

  const studyPlan: DayPlan[] = [
    // Days 1-5: Foundation Building (Ayanokoji Influence)
    {
      day: 1,
      phase: "Foundation Building",
      topic: "Linux Fundamentals I - System Architecture & Basics",
      hours: { theory: 3, practical: 4, review: 1 },
      objectives: [
        "Understand Linux architecture and kernel structure",
        "Master basic terminal commands and navigation",
        "Learn file system hierarchy and permissions",
        "Set up virtual environment (VirtualBox/VMware with Ubuntu)"
      ],
      karmaApproach: "Treat the terminal like a game - find shortcuts and master command chains rapidly",
      ayankojiApproach: "Map out the entire system architecture mentally before diving into commands",
      tasks: [
        "Install Ubuntu 22.04 LTS in VM (1h)",
        "Study: Linux architecture, kernel, shell basics (2h)",
        "Practice: 50 basic commands (cd, ls, pwd, mkdir, cp, mv, rm, cat, grep, find) (2h)",
        "Hands-on: Create directory structures, manipulate files, use wildcards (1.5h)",
        "Master file permissions: chmod, chown, umask (1h)",
        "Review session: Create command cheat sheet (0.5h)"
      ],
      resources: [
        "Linux Journey (linuxjourney.com) - Grasshopper section",
        "OverTheWire Bandit (first 10 levels)",
        "Linux Command Line Basics (Udacity - free)"
      ]
    },
    {
      day: 2,
      phase: "Foundation Building",
      topic: "Linux Fundamentals II - User Management & Process Control",
      hours: { theory: 2.5, practical: 4.5, review: 1 },
      objectives: [
        "Master user and group management",
        "Understand process management and system monitoring",
        "Learn text editors (vim/nano) proficiently",
        "Explore package management systems"
      ],
      karmaApproach: "Challenge yourself: Can you manage 5 users and 10 processes simultaneously?",
      ayankojiApproach: "Study the logic behind process hierarchies - understand parent-child relationships",
      tasks: [
        "User Management: useradd, usermod, passwd, su, sudo, /etc/passwd, /etc/group (1.5h)",
        "Master vim: vimtutor complete walkthrough (1h)",
        "Process Control: ps, top, htop, kill, killall, bg, fg, jobs, nice (2h)",
        "Package Management: apt, apt-get, dpkg, snap (1.5h)",
        "Practical Lab: Create 5 users, assign groups, manage their processes (1.5h)",
        "Review: Write process management scenarios (0.5h)"
      ],
      resources: [
        "Vim Adventures (vim-adventures.com)",
        "Linux Process Management Guide (nixCraft)",
        "Ubuntu Package Management Tutorial"
      ]
    },
    {
      day: 3,
      phase: "Foundation Building",
      topic: "Linux Advanced I - Networking & System Services",
      hours: { theory: 3, practical: 4, review: 1 },
      objectives: [
        "Configure network settings and troubleshoot connectivity",
        "Understand systemd and service management",
        "Master SSH and remote access",
        "Learn log file analysis"
      ],
      karmaApproach: "Break the network, then fix it - learn by controlled chaos",
      ayankojiApproach: "Map network topology mentally; understand service dependencies systematically",
      tasks: [
        "Networking: ifconfig, ip, ping, netstat, ss, route, traceroute (2h)",
        "SSH Setup: ssh-keygen, ssh-copy-id, config files, port forwarding (1.5h)",
        "Systemd: systemctl, journalctl, service creation and management (2h)",
        "Log Analysis: /var/log/, dmesg, syslog (1h)",
        "Practical: Set up SSH server, create custom service, troubleshoot connectivity (1h)",
        "Review: Network troubleshooting flowchart (0.5h)"
      ],
      resources: [
        "Linux Network Administration Guide",
        "DigitalOcean systemd tutorials",
        "Practical Networking Course (YouTube)"
      ]
    },
    {
      day: 4,
      phase: "Foundation Building",
      topic: "Linux Advanced II - Shell Scripting & Automation",
      hours: { theory: 2.5, practical: 5, review: 0.5 },
      objectives: [
        "Write efficient bash scripts",
        "Master control structures and functions",
        "Implement automation tasks with cron",
        "Learn sed, awk, and text processing"
      ],
      karmaApproach: "Script everything - automate tasks that take more than 2 minutes",
      ayankojiApproach: "Analyze script efficiency - optimize every command for minimal resource use",
      tasks: [
        "Bash Basics: variables, loops, conditionals, functions (2h)",
        "Text Processing: grep, sed, awk, cut, sort, uniq, tr (2h)",
        "Cron Jobs: crontab syntax, scheduling tasks, log rotation (1h)",
        "Script 5 automation tasks: backup, system monitoring, user report, cleanup, alert system (2.5h)",
        "Review: Debug and optimize your scripts (0.5h)"
      ],
      resources: [
        "Bash Scripting Tutorial (ryanstutorials.net)",
        "Advanced Bash-Scripting Guide",
        "Sed and Awk 101 Hacks"
      ]
    },
    {
      day: 5,
      phase: "Foundation Building",
      topic: "C# Fundamentals - Syntax, OOP, and .NET Basics",
      hours: { theory: 3, practical: 4.5, review: 0.5 },
      objectives: [
        "Master C# syntax and data types",
        "Understand OOP principles (encapsulation, inheritance, polymorphism)",
        "Learn .NET framework architecture",
        "Set up Visual Studio 2022"
      ],
      karmaApproach: "Code fast, break things, learn from exceptions",
      ayankojiApproach: "Understand the CLR and type system before writing complex code",
      tasks: [
        "Install Visual Studio 2022 Community + .NET 8 SDK (0.5h)",
        "C# Basics: types, variables, operators, control flow (1.5h)",
        "OOP Deep Dive: classes, objects, inheritance, polymorphism, interfaces (2.5h)",
        "Collections: List, Dictionary, Arrays, LINQ basics (1.5h)",
        "Build 5 console apps: calculator, todo list, file reader, inventory system, mini-game (2h)",
        "Review: OOP principles with diagrams (0.5h)"
      ],
      resources: [
        "Microsoft C# Documentation",
        "C# Player's Guide (Book)",
        "freeCodeCamp C# Tutorial (YouTube)"
      ]
    },

    // Days 6-10: Strategic Application (Karma Influence)
    {
      day: 6,
      phase: "Strategic Application",
      topic: "ASP.NET Core Fundamentals - MVC Architecture",
      hours: { theory: 2.5, practical: 5, review: 0.5 },
      objectives: [
        "Understand MVC pattern deeply",
        "Create first ASP.NET Core web application",
        "Master routing and controllers",
        "Learn Razor syntax and views"
      ],
      karmaApproach: "Build multiple small apps rapidly - fail fast, iterate faster",
      ayankojiApproach: "Study the request pipeline completely before building",
      tasks: [
        "ASP.NET Core Architecture: middleware, dependency injection, request pipeline (1.5h)",
        "MVC Pattern: Models, Views, Controllers - theory and best practices (1h)",
        "Create 3 MVC apps: Hello World, Product Catalog, Simple Blog (3h)",
        "Routing: conventional, attribute routing, route constraints (1h)",
        "Razor Views: syntax, layouts, partial views, view components (1.5h)",
        "Review: Diagram the request flow (0.5h)"
      ],
      resources: [
        "Microsoft Learn - ASP.NET Core MVC",
        "Pro ASP.NET Core MVC (Book)",
        "Kudvenkat ASP.NET tutorials (YouTube)"
      ]
    },
    {
      day: 7,
      phase: "Strategic Application",
      topic: "ASP.NET Core - Data Access with Entity Framework",
      hours: { theory: 2, practical: 5.5, review: 0.5 },
      objectives: [
        "Master Entity Framework Core",
        "Implement CRUD operations",
        "Understand Code-First and Database-First approaches",
        "Learn LINQ queries"
      ],
      karmaApproach: "Build a complete CRUD app in record time - compete against yourself",
      ayankojiApproach: "Analyze database design patterns - normalize before implementing",
      tasks: [
        "EF Core Setup: DbContext, connection strings, migrations (1h)",
        "Code-First: models, annotations, fluent API (1.5h)",
        "CRUD Operations: Create, Read, Update, Delete with EF Core (2h)",
        "Advanced LINQ: queries, filtering, sorting, eager/lazy loading (1.5h)",
        "Build: Complete student management system with database (2h)",
        "Review: Query optimization techniques (0.5h)"
      ],
      resources: [
        "Entity Framework Core Documentation",
        "Entity Framework Core in Action (Book)",
        "EF Core Tutorial (entityframeworktutorial.net)"
      ]
    },
    {
      day: 8,
      phase: "Strategic Application",
      topic: "ASP.NET Core - Forms, Validation & State Management",
      hours: { theory: 2, practical: 5.5, review: 0.5 },
      objectives: [
        "Master form handling and model binding",
        "Implement client and server validation",
        "Understand session, cookies, and TempData",
        "Learn authentication basics"
      ],
      karmaApproach: "Create intentionally vulnerable forms, then secure them - learn by attack and defense",
      ayankojiApproach: "Study state management patterns - choose the optimal approach for each scenario",
      tasks: [
        "Forms: model binding, tag helpers, form helpers (1.5h)",
        "Validation: data annotations, client-side validation, custom validators (2h)",
        "State Management: ViewData, ViewBag, TempData, Session, Cookies (1.5h)",
        "Authentication: Identity framework basics, login/logout (1.5h)",
        "Build: Registration + Login system with validation (1.5h)",
        "Review: Security best practices checklist (0.5h)"
      ],
      resources: [
        "ASP.NET Core Security Documentation",
        "OWASP Top 10 for .NET",
        "Pluralsight ASP.NET Core Path"
      ]
    },
    {
      day: 9,
      phase: "Strategic Application",
      topic: "Integration Day - Linux + ASP.NET Deployment",
      hours: { theory: 2, practical: 5.5, review: 0.5 },
      objectives: [
        "Deploy ASP.NET Core app on Linux",
        "Configure Nginx as reverse proxy",
        "Set up systemd service for .NET app",
        "Understand production best practices"
      ],
      karmaApproach: "Deploy, break, troubleshoot, fix - embrace the chaos of production",
      ayankojiApproach: "Plan deployment architecture completely before executing",
      tasks: [
        "Install .NET Runtime on Ubuntu (0.5h)",
        "Publish ASP.NET app for Linux (1h)",
        "Nginx Setup: installation, configuration, reverse proxy (2h)",
        "Systemd Service: create service file for .NET app, auto-restart configuration (1.5h)",
        "SSL/TLS: Let's Encrypt certificate setup (if using domain) (1h)",
        "Monitoring: setup logging, error tracking (1.5h)",
        "Review: Deployment checklist (0.5h)"
      ],
      resources: [
        "Microsoft: Host ASP.NET Core on Linux",
        "DigitalOcean Nginx guides",
        "Linux systemd documentation"
      ]
    },
    {
      day: 10,
      phase: "Strategic Application",
      topic: "Advanced Topics - API Development & Web Services",
      hours: { theory: 2, practical: 5.5, review: 0.5 },
      objectives: [
        "Build RESTful APIs with ASP.NET Core",
        "Master Web API controllers and routing",
        "Implement API versioning and documentation",
        "Test APIs with Postman/curl"
      ],
      karmaApproach: "Build an API that handles edge cases you haven't thought of yet",
      ayankojiApproach: "Design API contract first - implementation follows specification",
      tasks: [
        "REST Principles: HTTP methods, status codes, resource design (1h)",
        "Web API: ApiController, routing, action results (1.5h)",
        "Serialization: JSON, content negotiation, DTOs (1h)",
        "API Documentation: Swagger/OpenAPI setup (1h)",
        "Build: Complete REST API for task management (2.5h)",
        "Testing: Postman collections, curl commands, Linux integration (1h)",
        "Review: API design best practices (0.5h)"
      ],
      resources: [
        "RESTful API Design Best Practices",
        "Microsoft Web API Documentation",
        "Postman Learning Center"
      ]
    },

    // Days 11-15: Mastery and Refinement (Combined Influence)
    {
      day: 11,
      phase: "Mastery & Refinement",
      topic: "Linux Practical Scenarios - System Administration",
      hours: { theory: 1.5, practical: 6, review: 0.5 },
      objectives: [
        "Simulate real-world sysadmin scenarios",
        "Troubleshoot complex system issues",
        "Perform security hardening",
        "Master backup and recovery"
      ],
      karmaApproach: "Create disasters, solve them under time pressure",
      ayankojiApproach: "Methodically test each scenario - document every solution",
      tasks: [
        "Security Hardening: firewall (ufw/iptables), SELinux/AppArmor, fail2ban (2h)",
        "Backup Solutions: rsync, tar, automated backup scripts (1.5h)",
        "Troubleshooting Lab: fix broken boot, recover deleted files, resolve disk space issues (2h)",
        "Performance Tuning: monitor CPU/RAM/disk, optimize processes (1.5h)",
        "Practice 10 common sysadmin scenarios (1h)"
      ],
      resources: [
        "Linux System Administration HandBook",
        "TryHackMe Linux Fundamentals",
        "OverTheWire Bandit (complete all levels)"
      ]
    },
    {
      day: 12,
      phase: "Mastery & Refinement",
      topic: "ASP.NET Practical Projects - Build Complete Applications",
      hours: { theory: 1, practical: 6.5, review: 0.5 },
      objectives: [
        "Build 3 complete web applications",
        "Implement all learned concepts",
        "Focus on code quality and best practices",
        "Create portfolio-worthy projects"
      ],
      karmaApproach: "Build each app faster than the previous one - speed with quality",
      ayankojiApproach: "Plan architecture completely before coding - execute flawlessly",
      tasks: [
        "Project 1: E-commerce Product Catalog with cart (MVC + EF Core) (2.5h)",
        "Project 2: Blog Platform with authentication (Identity + CRUD) (2h)",
        "Project 3: RESTful API for library management (Web API + database) (2h)",
        "Code Review: refactor and optimize all projects (0.5h)",
        "Review: Create project documentation (0.5h)"
      ],
      resources: [
        "GitHub - explore ASP.NET sample projects",
        "Clean Code principles",
        "SOLID principles in C#"
      ]
    },
    {
      day: 13,
      phase: "Mastery & Refinement",
      topic: "Exam Simulation I - Linux Practical Exam Mock",
      hours: { theory: 0.5, practical: 7, review: 0.5 },
      objectives: [
        "Complete timed practical exercises",
        "Identify weak areas",
        "Build speed and accuracy",
        "Practice under exam conditions"
      ],
      karmaApproach: "Treat it like a game - achieve perfect score, no retries",
      ayankojiApproach: "Time each task - analyze inefficiencies, optimize approach",
      tasks: [
        "Mock Exam Set 1: User management, process control, networking (2h)",
        "Mock Exam Set 2: Shell scripting, automation, troubleshooting (2h)",
        "Mock Exam Set 3: System services, security, performance (2h)",
        "Weakness Analysis: identify and practice weak topics (1h)",
        "Review: Create mistake log and solutions (0.5h)"
      ],
      resources: [
        "Linux Academy Practice Exams",
        "LPI Learning Materials",
        "Create custom scenarios based on syllabus"
      ]
    },
    {
      day: 14,
      phase: "Mastery & Refinement",
      topic: "Exam Simulation II - ASP.NET Practical Exam Mock",
      hours: { theory: 0.5, practical: 7, review: 0.5 },
      objectives: [
        "Complete timed ASP.NET projects",
        "Build applications from scratch quickly",
        "Demonstrate all core concepts",
        "Achieve exam-ready proficiency"
      ],
      karmaApproach: "Random project generator - build whatever comes up, perfectly",
      ayankojiApproach: "Simulate exam pressure - execute with machine-like precision",
      tasks: [
        "Timed Build 1: MVC app with database (2h time limit)",
        "Timed Build 2: Web API with authentication (1.5h time limit)",
        "Timed Build 3: Full-stack app with forms & validation (2h time limit)",
        "Timed Build 4: Deploy app on Linux (1h time limit)",
        "Weakness Practice: focus on challenging concepts (1h)",
        "Review: Speed optimization techniques (0.5h)"
      ],
      resources: [
        "Microsoft Official Practice Tests",
        "ASP.NET Core sample exams",
        "Previous exam papers (if available)"
      ]
    },
    {
      day: 15,
      phase: "Mastery & Refinement",
      topic: "Final Review & Mental Preparation",
      hours: { theory: 2, practical: 5, review: 1 },
      objectives: [
        "Review all key concepts",
        "Practice speed drills",
        "Mental preparation techniques",
        "Final confidence building"
      ],
      karmaApproach: "Confidence through mastery - you've conquered every challenge",
      ayankojiApproach: "Calculate success probability - it's near 100%, act accordingly",
      tasks: [
        "Linux Rapid Review: go through all commands, scenarios (1.5h)",
        "ASP.NET Rapid Review: code patterns, common tasks (1.5h)",
        "Speed Drills: 20 quick challenges, 5 min each (1.5h)",
        "Integration Practice: Linux + ASP.NET combined tasks (1.5h)",
        "Mental Prep: visualization, review mistake log, confidence building (1h)",
        "Final Checklist: ensure all topics covered (0.5h)",
        "Rest & Strategy: prepare for exam day, plan approach (0.5h)"
      ],
      resources: [
        "Your notes and cheat sheets",
        "Spaced repetition flashcards",
        "Exam strategy guides"
      ]
    }
  ];

  const karmaTraits = [
    {
      trait: "Strategic Thinking",
      description: "Identify patterns and exploit weaknesses in problems",
      action: "Before solving, ask: 'What's the hidden weakness here?'"
    },
    {
      trait: "Adaptive Learning",
      description: "Quickly adjust approach based on what works",
      action: "If stuck for 10 minutes, completely change your method"
    },
    {
      trait: "Thrives Under Pressure",
      description: "Uses deadlines and challenges as motivation",
      action: "Set artificial time constraints 20% tighter than needed"
    },
    {
      trait: "Enjoys Challenges",
      description: "Seeks out difficult problems intentionally",
      action: "Always attempt harder problems before easier ones"
    }
  ];

  const ayankojiTraits = [
    {
      trait: "Analytical Precision",
      description: "Breaks down complex topics into fundamental components",
      action: "Create mental models and diagrams before implementation"
    },
    {
      trait: "Efficient Resource Use",
      description: "Maximizes learning output per time invested",
      action: "Focus 80% effort on 20% of topics that yield 80% results"
    },
    {
      trait: "Calculated Planning",
      description: "Plans entire approach before executing",
      action: "Spend first 30 min of study session planning the session"
    },
    {
      trait: "Observant Learning",
      description: "Learns from patterns and connections between concepts",
      action: "After each topic, ask: 'How does this connect to what I learned before?'"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <header className="gradient-combined py-8 px-4 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4">
            15-Day Linux & ASP.NET Mastery Plan
          </h1>
          <p className="text-xl text-center text-blue-100 mb-2">
            Zero to Perfect Score: Strategic Learning System
          </p>
          <p className="text-center text-sm text-blue-200">
            Combining Karma Akabane's strategic adaptability with Ayanokoji Kiyotaka's calculated precision
          </p>
        </div>
      </header>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Syllabus Overview */}
          <div className="section-card rounded-xl p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Syllabus Overview</h2>
            </div>
            <div className="text-gray-700 space-y-2">
              <p><strong>Duration:</strong> 15 Days × 8 Hours = 120 Hours</p>
              <p><strong>Target:</strong> Perfect Score in Practical Exams</p>
              <p><strong>Starting Level:</strong> Zero Knowledge</p>
              <div className="mt-4">
                <p className="font-semibold mb-2">Core Topics:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Linux Operating System (Commands, Administration, Networking)</li>
                  <li>ASP.NET with C# (MVC, Web API, Entity Framework)</li>
                  <li>System Integration (Deploy .NET on Linux)</li>
                  <li>Practical Application (Real-world scenarios)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="section-card rounded-xl p-6 shadow-xl">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Progress Tracker</h2>
            </div>
            <div className="text-gray-700">
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Completion</span>
                  <span className="font-bold text-2xl text-blue-600">
                    {Math.round((completedDays.length / 15) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-4">
                  <div
                    className="gradient-karma h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(completedDays.length / 15) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-gray-600">Days Completed</p>
                  <p className="text-2xl font-bold text-blue-600">{completedDays.length}/15</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-gray-600">Hours Invested</p>
                  <p className="text-2xl font-bold text-green-600">{completedDays.length * 8}h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Style Analysis */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Karma's Style */}
          <div className="section-card rounded-xl p-6 shadow-xl border-l-4 border-red-500">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Karma Akabane's Approach</h2>
            </div>
            <div className="text-gray-700 space-y-3">
              <p className="italic text-sm">
                "The key to victory is knowing your enemy - and in learning, that enemy is weakness."
              </p>
              <div className="space-y-2">
                <p><strong>Learning Style:</strong></p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Strategic and opportunistic</li>
                  <li>Thrives under pressure and tight deadlines</li>
                  <li>Adaptive - quickly changes tactics when needed</li>
                  <li>Identifies weaknesses and exploits them</li>
                  <li>Makes learning competitive and engaging</li>
                  <li>Enjoys solving complex challenges rapidly</li>
                </ul>
              </div>
              <div className="mt-4 bg-red-50 p-3 rounded-lg">
                <p className="font-semibold text-red-700 text-sm">Apply During: Days 6-10</p>
                <p className="text-xs text-gray-600 mt-1">
                  Strategic application phase - rapid iteration and challenge-seeking
                </p>
              </div>
            </div>
          </div>

          {/* Ayanokoji's Style */}
          <div className="section-card rounded-xl p-6 shadow-xl border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Ayanokoji Kiyotaka's Approach</h2>
            </div>
            <div className="text-gray-700 space-y-3">
              <p className="italic text-sm">
                "Understanding the fundamentals thoroughly makes everything else trivial."
              </p>
              <div className="space-y-2">
                <p><strong>Learning Style:</strong></p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Calculated and methodical</li>
                  <li>Prioritizes understanding core concepts deeply</li>
                  <li>Efficient - maximum output with minimum wasted effort</li>
                  <li>Observant - identifies patterns and connections</li>
                  <li>Plans completely before executing</li>
                  <li>Masters information manipulation and recall</li>
                </ul>
              </div>
              <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                <p className="font-semibold text-blue-700 text-sm">Apply During: Days 1-5</p>
                <p className="text-xs text-gray-600 mt-1">
                  Foundation building phase - systematic and comprehensive learning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Study Plans */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
            <Clock className="w-8 h-8 mr-3" />
            15-Day Breakdown
          </h2>

          <div className="space-y-6">
            {studyPlan.map((day) => (
              <div
                key={day.day}
                className={`day-card section-card rounded-xl p-6 shadow-xl cursor-pointer ${
                  completedDays.includes(day.day) ? 'border-l-4 border-green-500' : 'border-l-4 border-gray-400'
                }`}
                onClick={() => setActiveDay(activeDay === day.day ? null : day.day)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDay(day.day);
                        }}
                        className="mr-4"
                      >
                        {completedDays.includes(day.day) ? (
                          <CheckCircle2 className="w-8 h-8 text-green-500" />
                        ) : (
                          <Circle className="w-8 h-8 text-gray-400" />
                        )}
                      </button>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          Day {day.day}: {day.topic}
                        </h3>
                        <p className="text-sm text-blue-600 font-semibold">{day.phase}</p>
                      </div>
                    </div>

                    <div className="ml-12 mt-4">
                      <div className="flex gap-4 text-sm text-gray-600 mb-3">
                        <span className="bg-blue-100 px-3 py-1 rounded-full">
                          📚 Theory: {day.hours.theory}h
                        </span>
                        <span className="bg-green-100 px-3 py-1 rounded-full">
                          💻 Practical: {day.hours.practical}h
                        </span>
                        <span className="bg-yellow-100 px-3 py-1 rounded-full">
                          🔄 Review: {day.hours.review}h
                        </span>
                      </div>

                      {activeDay === day.day && (
                        <div className="mt-6 space-y-6 text-gray-700">
                          {/* Objectives */}
                          <div>
                            <h4 className="font-bold text-lg mb-2 flex items-center">
                              <Target className="w-5 h-5 mr-2 text-blue-500" />
                              Learning Objectives
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm ml-7">
                              {day.objectives.map((obj, idx) => (
                                <li key={idx}>{obj}</li>
                              ))}
                            </ul>
                          </div>

                          {/* Character Approaches */}
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-red-50 p-4 rounded-lg">
                              <p className="font-semibold text-red-700 mb-2">⚡ Karma's Strategy:</p>
                              <p className="text-sm">{day.karmaApproach}</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="font-semibold text-blue-700 mb-2">🧠 Ayanokoji's Strategy:</p>
                              <p className="text-sm">{day.ayankojiApproach}</p>
                            </div>
                          </div>

                          {/* Tasks */}
                          <div>
                            <h4 className="font-bold text-lg mb-2">📋 Task Schedule</h4>
                            <ul className="space-y-2">
                              {day.tasks.map((task, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                  <span className="text-blue-500 mr-2">▸</span>
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Resources */}
                          <div>
                            <h4 className="font-bold text-lg mb-2">🔗 Recommended Resources</h4>
                            <ul className="space-y-1 text-sm ml-7 list-disc list-inside">
                              {day.resources.map((resource, idx) => (
                                <li key={idx}>{resource}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Character Traits Integration */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Karma Traits */}
          <div className="section-card rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Award className="w-7 h-7 text-red-500 mr-3" />
              Karma's Traits to Emulate
            </h2>
            <div className="space-y-4">
              {karmaTraits.map((item, idx) => (
                <div key={idx} className="border-l-4 border-red-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-800 text-lg">{item.trait}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <p className="text-sm bg-red-50 p-2 rounded text-red-700">
                    <strong>Action:</strong> {item.action}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ayanokoji Traits */}
          <div className="section-card rounded-xl p-6 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Award className="w-7 h-7 text-blue-500 mr-3" />
              Ayanokoji's Traits to Emulate
            </h2>
            <div className="space-y-4">
              {ayankojiTraits.map((item, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-800 text-lg">{item.trait}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <p className="text-sm bg-blue-50 p-2 rounded text-blue-700">
                    <strong>Action:</strong> {item.action}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Routine */}
        <div className="section-card rounded-xl p-6 shadow-xl mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <TrendingUp className="w-7 h-7 text-green-500 mr-3" />
            Optimal Daily Routine (8 Hours)
          </h2>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
              <p className="font-bold text-blue-800 mb-2">Session 1: Morning</p>
              <p className="text-blue-700 mb-2">7:00 AM - 9:30 AM</p>
              <p className="text-gray-700">Theory & Concept Learning (2.5h)</p>
              <p className="text-xs text-gray-600 mt-2">Peak mental clarity - absorb new information</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
              <p className="font-bold text-green-800 mb-2">Session 2: Late Morning</p>
              <p className="text-green-700 mb-2">10:00 AM - 1:00 PM</p>
              <p className="text-gray-700">Hands-on Practice (3h)</p>
              <p className="text-xs text-gray-600 mt-2">High energy - tackle challenging labs</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
              <p className="font-bold text-purple-800 mb-2">Session 3: Afternoon</p>
              <p className="text-purple-700 mb-2">2:00 PM - 4:30 PM</p>
              <p className="text-gray-700">Applied Projects (2.5h)</p>
              <p className="text-xs text-gray-600 mt-2">Build real applications</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg">
              <p className="font-bold text-orange-800 mb-2">Session 4: Evening</p>
              <p className="text-orange-700 mb-2">5:00 PM - 6:00 PM</p>
              <p className="text-gray-700">Review & Consolidation (1h)</p>
              <p className="text-xs text-gray-600 mt-2">Spaced repetition & notes</p>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-yellow-800 mb-2">🎯 Focus Technique</p>
              <p className="text-sm text-gray-700">Pomodoro: 50 min work + 10 min break</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <p className="font-semibold text-pink-800 mb-2">💪 Energy Management</p>
              <p className="text-sm text-gray-700">Hydrate, stretch every hour, 7-8h sleep</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-semibold text-indigo-800 mb-2">📝 Note System</p>
              <p className="text-sm text-gray-700">Cornell method + spaced repetition flashcards</p>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="section-card rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🎯 Success Criteria for Perfect Score
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">Linux Mastery Checklist</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Execute 100+ commands from memory without reference</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Write bash scripts to automate any given task in &lt;15 min</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Troubleshoot system issues methodically within time limits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Configure networks, services, security from scratch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Complete any sysadmin scenario with 90%+ accuracy</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800 mb-3">ASP.NET Mastery Checklist</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Build complete MVC application in &lt;90 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Implement CRUD with EF Core without documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Create RESTful APIs with proper structure and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Deploy .NET apps on Linux server confidently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Write clean, optimized C# code following best practices</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
            <p className="text-center font-bold text-gray-800">
              🏆 Final Goal: Complete practical exams with 95-100% accuracy, demonstrating both speed and precision
            </p>
          </div>
        </div>

        {/* Motivational Footer */}
        <div className="mt-12 gradient-combined rounded-xl p-8 text-center shadow-xl">
          <p className="text-2xl font-bold mb-4">
            "The difference between the impossible and possible lies in determination."
          </p>
          <p className="text-lg mb-2">
            Karma's adaptability + Ayanokoji's precision = Your perfect score
          </p>
          <p className="text-sm text-blue-100">
            120 hours of strategic learning. 15 days of transformation. One perfect score.
          </p>
          <div className="mt-6 text-sm">
            <p className="font-semibold">Remember: </p>
            <p>Days 1-5: Build foundations like Ayanokoji - methodically and completely</p>
            <p>Days 6-10: Apply like Karma - strategically and adaptively</p>
            <p>Days 11-15: Master like both - efficiently and precisely</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-6 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p>Generated Learning Plan - Optimized for Maximum Efficiency</p>
          <p className="mt-2">Track your progress daily. Adjust strategies as needed. Achieve perfection.</p>
        </div>
      </footer>
    </div>
  );
}
