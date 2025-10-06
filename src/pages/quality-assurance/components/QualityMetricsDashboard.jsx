import React from 'react';
import Icon from '../../../components/AppIcon';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const QualityMetricsDashboard = () => {
  const qualityMetrics = [
    {
      id: 1,
      title: "Overall Quality Score",
      value: "99.2%",
      change: "+0.3%",
      trend: "up",
      icon: "TrendingUp",
      color: "success",
      description: "Average quality score across all products"
    },
    {
      id: 2,
      title: "Defect Rate",
      value: "0.8%",
      change: "-0.2%",
      trend: "down",
      icon: "AlertTriangle",
      color: "warning",
      description: "Products requiring rework or rejection"
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.1",
      trend: "up",
      icon: "Star",
      color: "conversion-accent",
      description: "Average customer rating for quality"
    },
    {
      id: 4,
      title: "First Pass Yield",
      value: "98.5%",
      change: "+0.5%",
      trend: "up",
      icon: "CheckCircle",
      color: "industrial-green",
      description: "Products passing quality check on first attempt"
    }
  ];

  const monthlyQualityData = [
    { month: 'Jan', qualityScore: 98.5, defectRate: 1.5, customerSatisfaction: 4.6 },
    { month: 'Feb', qualityScore: 98.8, defectRate: 1.2, customerSatisfaction: 4.7 },
    { month: 'Mar', qualityScore: 99.0, defectRate: 1.0, customerSatisfaction: 4.7 },
    { month: 'Apr', qualityScore: 99.1, defectRate: 0.9, customerSatisfaction: 4.8 },
    { month: 'May', qualityScore: 99.0, defectRate: 1.0, customerSatisfaction: 4.8 },
    { month: 'Jun', qualityScore: 99.2, defectRate: 0.8, customerSatisfaction: 4.8 }
  ];

  const defectCategoryData = [
    { name: 'Dimensional', value: 35, color: '#dc3545' },
    { name: 'Surface Finish', value: 25, color: '#ffc107' },
    { name: 'Material', value: 20, color: '#28a745' },
    { name: 'Assembly', value: 15, color: '#17a2b8' },
    { name: 'Others', value: 5, color: '#6c757d' }
  ];

  const improvementInitiatives = [
    {
      id: 1,
      title: "Automated Quality Inspection",
      description: "Implementation of AI-powered visual inspection systems",
      progress: 85,
      impact: "Reduced inspection time by 40%",
      status: "In Progress",
      startDate: "2024-09-01",
      expectedCompletion: "2025-01-15"
    },
    {
      id: 2,
      title: "Supplier Quality Program",
      description: "Enhanced supplier auditing and material certification",
      progress: 100,
      impact: "Improved raw material quality by 15%",
      status: "Completed",
      startDate: "2024-06-01",
      expectedCompletion: "2024-11-30"
    },
    {
      id: 3,
      title: "Process Optimization",
      description: "Statistical process control implementation",
      progress: 60,
      impact: "Reduced process variation by 25%",
      status: "In Progress",
      startDate: "2024-10-01",
      expectedCompletion: "2025-03-31"
    },
    {
      id: 4,
      title: "Employee Training Program",
      description: "Advanced quality control training for production staff",
      progress: 45,
      impact: "Improved quality awareness by 30%",
      status: "In Progress",
      startDate: "2024-11-01",
      expectedCompletion: "2025-02-28"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-success bg-success/10 border-success/20';
      case 'In Progress':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'Planned':
        return 'text-text-secondary bg-muted border-border';
      default:
        return 'text-text-secondary bg-muted border-border';
    }
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? 'TrendingUp' : 'TrendingDown';
  };

  const getTrendColor = (trend, isDefect = false) => {
    if (isDefect) {
      return trend === 'down' ? 'text-success' : 'text-error';
    }
    return trend === 'up' ? 'text-success' : 'text-error';
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center">
              <Icon name="BarChart3" size={24} className="text-white" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-4">
            Quality Metrics Dashboard
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real-time quality performance indicators and continuous improvement tracking 
            for data-driven quality management decisions.
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {qualityMetrics?.map((metric) => (
            <div
              key={metric?.id}
              className="bg-white rounded-xl p-6 shadow-industrial hover:shadow-industrial-lg precision-transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-${metric?.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={metric?.icon} size={24} className="text-white" />
                </div>
                <div className={`flex items-center space-x-1 ${getTrendColor(metric?.trend, metric?.title?.includes('Defect'))}`}>
                  <Icon name={getTrendIcon(metric?.trend)} size={16} />
                  <span className="text-sm font-medium">{metric?.change}</span>
                </div>
              </div>
              
              <div className="mb-2">
                <div className="text-2xl font-headline font-bold text-primary mb-1">
                  {metric?.value}
                </div>
                <h3 className="text-sm font-semibold text-text-primary">
                  {metric?.title}
                </h3>
              </div>
              
              <p className="text-xs text-text-secondary">
                {metric?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Quality Trend Chart */}
          <div className="bg-white rounded-xl p-6 shadow-industrial">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-headline font-bold text-primary">
                Quality Trends (6 Months)
              </h3>
              <Icon name="TrendingUp" size={20} className="text-success" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyQualityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
                  <XAxis dataKey="month" stroke="#6c757d" fontSize={12} />
                  <YAxis stroke="#6c757d" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="qualityScore" 
                    stroke="#2d5a27" 
                    strokeWidth={2}
                    name="Quality Score (%)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="customerSatisfaction" 
                    stroke="#27ae60" 
                    strokeWidth={2}
                    name="Customer Satisfaction"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Defect Categories */}
          <div className="bg-white rounded-xl p-6 shadow-industrial">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-headline font-bold text-primary">
                Defect Categories
              </h3>
              <Icon name="PieChart" size={20} className="text-warning" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={defectCategoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {defectCategoryData?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Percentage']}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {defectCategoryData?.map((category, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: category?.color }}
                  ></div>
                  <span className="text-xs text-text-secondary">
                    {category?.name} ({category?.value}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Improvement Initiatives */}
        <div className="bg-white rounded-xl p-8 shadow-industrial">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-headline font-bold text-primary">
              Continuous Improvement Initiatives
            </h3>
            <Icon name="Target" size={24} className="text-conversion-accent" />
          </div>

          <div className="space-y-6">
            {improvementInitiatives?.map((initiative) => (
              <div
                key={initiative?.id}
                className="border border-border rounded-lg p-6 hover:shadow-industrial precision-transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-lg font-headline font-semibold text-primary">
                        {initiative?.title}
                      </h4>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(initiative?.status)}`}>
                        {initiative?.status}
                      </div>
                    </div>
                    <p className="text-text-secondary mb-3">
                      {initiative?.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <span>Started: {new Date(initiative.startDate)?.toLocaleDateString('en-IN')}</span>
                      <span>Expected: {new Date(initiative.expectedCompletion)?.toLocaleDateString('en-IN')}</span>
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="text-2xl font-headline font-bold text-primary mb-1">
                      {initiative?.progress}%
                    </div>
                    <div className="text-xs text-text-secondary">Progress</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-surface rounded-full h-2">
                    <div 
                      className="bg-conversion-accent h-2 rounded-full precision-transition"
                      style={{ width: `${initiative?.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Impact */}
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="TrendingUp" size={16} className="text-success" />
                  <span className="text-text-secondary">Impact: </span>
                  <span className="text-success font-medium">{initiative?.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityMetricsDashboard;