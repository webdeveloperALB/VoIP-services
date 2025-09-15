import React, { useEffect, useState } from 'react';

const HackingTerminal = () => {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const hackingCommands = [
    'nmap -sS -O target.voip.network',
    'wireshark -i eth0 -f "port 5060"',
    'sipvicious svmap 192.168.1.0/24',
    'metasploit > use auxiliary/scanner/sip/options',
    'tcpdump -i any -s 0 port 5060',
    'openssl s_client -connect voip.server:5061',
    'python3 sip_scanner.py --target-range 10.0.0.0/8',
    'nessus -T html -i policy.nessus target.voip',
    'burpsuite --proxy=127.0.0.1:8080',
    'sqlmap -u "http://voip.admin/login.php"',
    'john --wordlist=rockyou.txt hashes.txt',
    'hashcat -m 0 -a 0 hash.txt wordlist.txt',
    'aircrack-ng -w wordlist.txt capture.cap',
    'hydra -l admin -P passwords.txt voip.target.com sip',
    'nikto -h http://voip.management.panel',
    'gobuster dir -u http://target.voip -w /usr/share/wordlists/common.txt'
  ];

  const systemResponses = [
    'Starting Nmap 7.94 ( https://nmap.org )',
    'Host is up (0.00045s latency)',
    'PORT     STATE SERVICE VERSION',
    '5060/tcp open  sip     Asterisk PBX',
    'MAC Address: 00:1B:21:AB:CD:EF (Cisco)',
    'Device type: VoIP phone|PBX|gateway',
    'Running: Linux 3.X|4.X',
    'OS CPE: cpe:/o:linux:linux_kernel:3',
    'Aggressive OS guesses: Linux 3.2 - 4.9',
    'Network Distance: 1 hop',
    'TRACEROUTE',
    'HOP RTT     ADDRESS',
    '1   0.45 ms 192.168.1.1',
    'Nmap done: 1 IP address scanned',
    '[+] SIP server detected',
    '[+] Authentication required',
    '[!] Potential vulnerability found',
    '[*] Scanning for open ports...',
    '[*] Checking SSL/TLS configuration...',
    '[+] Weak cipher detected: RC4-MD5',
    'VULNERABLE: CVE-2023-1234',
    'Severity: HIGH',
    'Description: Buffer overflow in SIP parser',
    '[*] Exploit successful',
    '[+] Shell access gained',
    'root@voip-server:~# whoami',
    'root',
    'root@voip-server:~# ls -la',
    'total 48',
    'drwxr-xr-x  6 root root 4096 Dec 15 10:30 .',
    'drwxr-xr-x 23 root root 4096 Dec 15 09:15 ..',
    '-rw-------  1 root root 1234 Dec 15 10:29 .bash_history',
    'drwx------  2 root root 4096 Dec 15 09:20 .ssh',
    '-rw-r--r--  1 root root  807 Dec 15 09:15 config.xml'
  ];

  useEffect(() => {
    let commandIndex = 0;
    let responseIndex = 0;
    let isTypingCommand = true;
    let charIndex = 0;

    const typeEffect = () => {
      if (isTypingCommand) {
        // Typing command
        const command = hackingCommands[commandIndex % hackingCommands.length];
        if (charIndex < command.length) {
          setCurrentCommand(command.substring(0, charIndex + 1));
          charIndex++;
          setTimeout(typeEffect, 50 + Math.random() * 50);
        } else {
          // Command complete, add to terminal
          setTerminalLines(prev => {
            const newLines = [...prev];
            if (newLines.length > 15) newLines.shift();
            newLines.push(`root@voixel:~# ${command}`);
            return newLines;
          });
          setCurrentCommand('');
          isTypingCommand = false;
          charIndex = 0;
          setTimeout(typeEffect, 500);
        }
      } else {
        // Show responses
        const responsesToShow = Math.floor(Math.random() * 4) + 1;
        for (let i = 0; i < responsesToShow; i++) {
          setTimeout(() => {
            setTerminalLines(prev => {
              const newLines = [...prev];
              if (newLines.length > 15) newLines.shift();
              newLines.push(systemResponses[responseIndex % systemResponses.length]);
              responseIndex++;
              return newLines;
            });
          }, i * 200);
        }
        
        commandIndex++;
        isTypingCommand = true;
        setTimeout(typeEffect, 2000 + Math.random() * 3000);
      }
    };

    typeEffect();
  }, []);

  return (
    <div className="fixed top-28 left-2 md:left-4 pointer-events-none z-10 opacity-90 hidden sm:block">
      <div className="bg-black/95 border border-green-500/70 rounded-lg p-2 sm:p-3 md:p-4 font-mono text-xs max-w-xs shadow-2xl shadow-green-500/20">
        <div className="flex items-center space-x-2 mb-2 md:mb-3 border-b border-green-500/30 pb-2">
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-green-400 text-xs hidden lg:inline">Voixel Security</span>
        </div>
        
        <div className="space-y-0.5 sm:space-y-1 max-h-60 sm:max-h-80 overflow-hidden">
          {terminalLines.map((line, index) => (
            <div
              key={index}
              className={`text-xs ${
                line.startsWith('root@') 
                  ? 'text-green-400' 
                  : line.includes('[+]') 
                    ? 'text-cyan-400'
                    : line.includes('[!]') || line.includes('VULNERABLE')
                      ? 'text-red-400'
                      : line.includes('[*]')
                        ? 'text-yellow-400'
                        : 'text-gray-300'
              } leading-tight`}
              style={{ 
                animation: `fadeIn 0.5s ease-in`,
                animationDelay: `${index * 0.1}s` 
              }}
            >
              {line}
            </div>
          ))}
          
          {currentCommand && (
            <div className="text-green-400 text-xs leading-tight">
              root@voixel:~# {currentCommand}
              <span className="animate-pulse">|</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HackingTerminal;