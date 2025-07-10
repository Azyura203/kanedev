import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';

interface TerminalCommand {
  command: string;
  output: string | React.ReactNode;
  timestamp: Date;
}

const Terminal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalCommand[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: {
      description: 'Show available commands',
      output: (
        <div className="space-y-2">
          <div className="text-green-400">Available commands:</div>
          <div className="ml-4 space-y-1 text-sm">
            <div><span className="text-blue-400">about</span> - Learn about Kane</div>
            <div><span className="text-blue-400">projects</span> - View my projects</div>
            <div><span className="text-blue-400">skills</span> - Check my technical skills</div>
            <div><span className="text-blue-400">contact</span> - Get my contact information</div>
            <div><span className="text-blue-400">echos</span> - Learn about my OS project</div>
            <div><span className="text-blue-400">kanedev</span> - My company vision</div>
            <div><span className="text-blue-400">whoami</span> - Display current user info</div>
            <div><span className="text-blue-400">date</span> - Show current date and time</div>
            <div><span className="text-blue-400">clear</span> - Clear the terminal</div>
            <div><span className="text-blue-400">exit</span> - Close terminal</div>
          </div>
        </div>
      )
    },
    about: {
      description: 'Learn about Kane',
      output: (
        <div className="space-y-2">
          <div className="text-green-400">Kane (Kyaw Gaung) - Junior Developer</div>
          <div className="text-sm space-y-1">
            <div>🎓 Fresh graduate with Bachelor's degree + HND</div>
            <div>💻 Passionate about full stack development</div>
            <div>🚀 Building echOS from scratch</div>
            <div>🎯 Dream: Running KANEDEV software company</div>
            <div>🐛 Fun fact: I actually enjoy debugging!</div>
          </div>
        </div>
      )
    },
    projects: {
      description: 'View my projects',
      output: (
        <div className="space-y-2">
          <div className="text-green-400">Featured Projects:</div>
          <div className="ml-4 space-y-2 text-sm">
            <div>
              <div className="text-blue-400">KODEX</div>
              <div className="text-gray-300">AI-powered documentation platform</div>
              <div className="text-yellow-400">Tech: React, TypeScript, AI Integration</div>
            </div>
            <div>
              <div className="text-blue-400">Wallnance Tycoon</div>
              <div className="text-gray-300">Trading strategy game with crypto simulation</div>
              <div className="text-yellow-400">Tech: React Native, Expo, Crypto APIs</div>
            </div>
            <div>
              <div className="text-blue-400">echOS</div>
              <div className="text-gray-300">Custom OS built from scratch</div>
              <div className="text-yellow-400">Tech: Assembly, C, Custom Kernel</div>
            </div>
          </div>
        </div>
      )
    },
    skills: {
      description: 'Check my technical skills',
      output: (
        <div className="space-y-2">
          <div className="text-green-400">Technical Skills:</div>
          <div className="ml-4 space-y-1 text-sm">
            <div>Full Stack Development: ████████░░ 80%</div>
            <div>DevOps & System Programming: ██░░░░░░░░ 25%</div>
            <div>Problem Solving: ████████░░ 85%</div>
            <div>Learning & Adaptation: █████████░ 90%</div>
          </div>
          <div className="mt-3">
            <div className="text-blue-400">Languages & Technologies:</div>
            <div className="text-sm ml-4">React, TypeScript, Node.js, Assembly, C, Python</div>
          </div>
        </div>
      )
    },
    contact: {
      description: 'Get my contact information',
      output: (
        <div className="space-y-2">
          <div className="text-green-400">Contact Information:</div>
          <div className="ml-4 space-y-1 text-sm">
            <div>📧 Email: saikyawgaung@gmail.com</div>
            <div>🐙 GitHub: github.com/Azyura203</div>
            <div>💼 LinkedIn: linkedin.com/in/saikyawgaung</div>
            <div>🌐 Portfolio: kyawgaung-kanedev.netlify.app</div>
          </div>
          <div className="mt-2 text-green-400">
            💡 Currently open to opportunities!
          </div>
        </div>
      )
    },
    echos: {
      description: 'Learn about my OS project',
      output: (
        <div className="space-y-2">
          <div className="text-red-400">echOS - Custom Operating System</div>
          <div className="text-sm space-y-1">
            <div>🔧 Built from scratch using Assembly and C</div>
            <div>🧠 Custom kernel with memory management</div>
            <div>💻 GRUB bootloader integration</div>
            <div>🖥️ Basic shell interface</div>
            <div>📊 Status: v1.4.0-beta (In Development)</div>
          </div>
          <div className="mt-2 text-yellow-400">
            "Pure code. Zero dependencies. From bits to boot."
          </div>
        </div>
      )
    },
    kanedev: {
      description: 'My company vision',
      output: (
        <div className="space-y-2">
          <div className="text-blue-400">KANEDEV - Software Company Vision</div>
          <div className="text-sm space-y-1">
            <div>🚀 Building innovative software solutions</div>
            <div>👥 Collaborative culture with passionate developers</div>
            <div>💡 Focus on quality and user experience</div>
            <div>📈 Growth mindset and continuous learning</div>
          </div>
          <div className="mt-2 text-green-400">
            "Dreams don't work unless you do." - KANEDEV mantra
          </div>
        </div>
      )
    },
    whoami: {
      description: 'Display current user info',
      output: (
        <div className="space-y-1">
          <div>kane@portfolio:~$ whoami</div>
          <div className="text-green-400">Kyaw Gaung (Kane)</div>
          <div className="text-sm text-gray-300">Junior Developer | echOS Creator | Future KANEDEV Founder</div>
        </div>
      )
    },
    date: {
      description: 'Show current date and time',
      output: new Date().toLocaleString()
    },
    clear: {
      description: 'Clear the terminal',
      output: null
    },
    exit: {
      description: 'Close terminal',
      output: 'Goodbye! 👋'
    }
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const timestamp = new Date();

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd === 'exit') {
      setHistory(prev => [...prev, { command: cmd, output: commands.exit.output, timestamp }]);
      setTimeout(() => setIsOpen(false), 1000);
      return;
    }

    const command = commands[trimmedCmd as keyof typeof commands];
    const output = command ? command.output : (
      <div className="text-red-400">
        Command not found: {cmd}
        <div className="text-gray-400 text-sm mt-1">Type 'help' for available commands</div>
      </div>
    );

    setHistory(prev => [...prev, { command: cmd, output, timestamp }]);
    
    // Add to command history
    if (trimmedCmd && !commandHistory.includes(trimmedCmd)) {
      setCommandHistory(prev => [...prev, trimmedCmd]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Add welcome message when terminal opens
  useEffect(() => {
    if (isOpen && history.length === 0) {
      setHistory([{
        command: '',
        output: (
          <div className="space-y-2">
            <div className="text-green-400">Welcome to Kane's Portfolio Terminal! 🚀</div>
            <div className="text-sm text-gray-300">Type 'help' to see available commands.</div>
            <div className="text-xs text-gray-400">Use ↑/↓ arrows to navigate command history.</div>
          </div>
        ),
        timestamp: new Date()
      }]);
    }
  }, [isOpen]);

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-black text-green-400 rounded-2xl shadow-2xl hover:shadow-green-400/20 transition-all duration-300 focus-ring"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        title="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6" />
      </motion.button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-4 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Terminal Window */}
            <motion.div
              className={`relative w-full max-w-4xl bg-black rounded-2xl shadow-2xl overflow-hidden ${
                isMinimized ? 'h-12' : 'h-96 md:h-[500px]'
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-sm text-gray-300 font-mono">
                    kane@portfolio:~
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <Minimize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              {!isMinimized && (
                <div className="flex flex-col h-full">
                  {/* Terminal Output */}
                  <div 
                    ref={terminalRef}
                    className="flex-1 p-4 overflow-y-auto font-mono text-sm text-green-400 bg-black"
                  >
                    {history.map((entry, index) => (
                      <div key={index} className="mb-3">
                        {entry.command && (
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-blue-400">kane@portfolio:~$</span>
                            <span className="text-white">{entry.command}</span>
                          </div>
                        )}
                        {entry.output && (
                          <div className="ml-0 text-gray-300">
                            {typeof entry.output === 'string' ? entry.output : entry.output}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Terminal Input */}
                  <form onSubmit={handleSubmit} className="border-t border-gray-700 p-4 bg-black">
                    <div className="flex items-center gap-2 font-mono text-sm">
                      <span className="text-blue-400">kane@portfolio:~$</span>
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent text-white outline-none"
                        placeholder="Type a command..."
                        autoComplete="off"
                      />
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;