import React, { useEffect, useState } from 'react';
import { CheckCircle, Activity, Users, Phone, Globe, TrendingUp } from 'lucide-react';

const SystemStatus = () => {
  const [alerts, setAlerts] = useState<Array<{
    id: number;
    type: 'online' | 'active' | 'performance' | 'update';
    message: string;
    timestamp: string;
    icon: any;
  }>>([]);

  const alertTypes = [
    {
      type: 'online' as const,
      messages: [
        'All VoIP servers online',
        'Global network operational',
        'Call routing optimized',
        'Voice quality excellent',
        'System health: 100%'
      ],
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      type: 'active' as const,
      messages: [
        '2,847 active calls',
        '156 agents online',
        '23 countries connected',
        '99.97% uptime maintained',
        '847ms avg response time'
      ],
      icon: Activity,
      color: 'text-cyan-400'
    },
    {
      type: 'performance' as const,
      messages: [
        'Call completion: 99.8%',
        'Voice latency: 28ms',
        'Bandwidth usage: 67%',
        'Customer satisfaction: 4.9/5',
        'Network performance optimal'
      ],
      icon: TrendingUp,
      color: 'text-purple-400'
    },
    {
      type: 'update' as const,
      messages: [
        'New agent connected',
        'Call center expansion complete',
        'Feature update deployed',
        'Integration with CRM active',
        'Mobile app synchronized'
      ],
      icon: Users,
      color: 'text-blue-400'
    }
  ];

  useEffect(() => {
    const addAlert = () => {
      const alertType = alertTypes[Math.floor(Math.random() * alertTypes.length)];
      const message = alertType.messages[Math.floor(Math.random() * alertType.messages.length)];
      
      const newAlert = {
        id: Date.now(),
        type: alertType.type,
        message,
        timestamp: new Date().toLocaleTimeString(),
        icon: alertType.icon
      };

      setAlerts(prev => {
        const updated = [newAlert, ...prev];
        return updated.slice(0, 6); // Keep only last 6 alerts
      });
    };

    // Add initial alert
    addAlert();

    // Add new alerts periodically
    const interval = setInterval(addAlert, 3000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  const getAlertStyles = (type: string) => {
    switch (type) {
      case 'online':
        return 'border-green-500/50 bg-green-500/10 text-green-400';
      case 'active':
        return 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400';
      case 'performance':
        return 'border-purple-500/50 bg-purple-500/10 text-purple-400';
      case 'update':
        return 'border-blue-500/50 bg-blue-500/10 text-blue-400';
      default:
        return 'border-gray-500/50 bg-gray-500/10 text-gray-400';
    }
  };

  return (
    <div className="fixed top-28 right-2 md:right-4 pointer-events-none z-10 opacity-90 max-w-xs md:max-w-sm hidden sm:block">
      <div className="space-y-1 md:space-y-2">
        {alerts.map((alert, index) => (
          <div
            key={alert.id}
            className={`p-1.5 sm:p-2 md:p-3 rounded-lg border backdrop-blur-sm ${getAlertStyles(alert.type)} transform transition-all duration-500 ease-out`}
            style={{
              animation: `slideInRight 0.5s ease-out ${index * 0.1}s both`,
              transform: `translateY(${index * 2}px)`
            }}
          >
            <div className="flex items-start space-x-1 sm:space-x-2">
              <alert.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium truncate leading-tight">{alert.message}</p>
                <p className="text-xs opacity-70 mt-0.5 md:mt-1 hidden lg:block">{alert.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemStatus;