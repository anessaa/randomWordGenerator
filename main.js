const words = ['modern', 'world', 'current', 'prevailing', 'funtime', 'automation', 'software', 
  'applied', 'rapid', 'new', 'dynamics', 'automated', 'productivity', 'meritus', 'quality', 'dynamic', 'signal', 'designs', 'command', 'concrete', 'elements', 'composition', 'structure', 'tactics', 'systems', 'company', 'service', 'nuclear', 'features', 'world', 'technology', 'classic', 'laser', 'software', 'applying', '90', '78', 'coding', 'exclusive', 'velocity', 'strategy', 'object', 'abstract', 'types', 'evolving', 'smart', 'unison', 'programs', 'applications', 'times', 'products', 'simple', 'tactical', 'results','art', 'functions', 'art', 'sights', 'patterns', 'support', 'inheiritance', 'distinct', 'component', 'flexible', 'programmable', 'information', 'programming', 'boolean', 'semicolon', 'functional', 'library', 'multiple', 'rewritten', 'deploy', 'streams', 'input',
  'object-oriented', 'proxies', 'proxy', 'inner classes', 'exception', 'concurrency', 'event listener', 'graphical', 'compiling', 'console', 'editor', 'loops', 'methods', 'classes', 'concepts', 'story', 'objects', 'fundamental', 'technique', 'mechanism', 'interface', 'mastering']

document.getElementById('generate').addEventListener('click', generateWords);

function generateWords() {
    var wordsLength = words.length - 1;
    var randomFirstWord = Math.floor(Math.random() * wordsLength);
    var randomSecondWord = Math.floor(Math.random() * wordsLength);
    var word = document.getElementById('word').innerHTML = words[randomFirstWord] + ' ' + words[randomSecondWord];
    return word;
} 