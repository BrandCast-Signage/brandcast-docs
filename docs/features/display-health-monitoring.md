---
title: Display Health Monitoring
---

# Display Health Monitoring

Real-time monitoring and analytics for display performance, uptime, and health status to ensure reliable digital signage operations.

## Overview

Display Health Monitoring provides comprehensive insights into display performance, connection status, and operational health. Track uptime, diagnose issues, and maintain optimal display performance across your entire network.

**Key Features:**
- Real-time health status
- Uptime and downtime tracking
- Connection monitoring
- Error and warning alerts
- Performance metrics
- Historical health data
- Automated health checks

## Display Health Status

### Status Indicators

**Online (Green):**
- Display actively connected
- Content rendering normally
- Recent heartbeat received (< 2 minutes)
- No critical errors

**Degraded (Yellow):**
- Intermittent connectivity
- Performance issues detected
- Minor errors present
- Slow response times

**Offline (Red):**
- No connection established
- Heartbeat timeout (> 5 minutes)
- Display unreachable
- Critical errors

**Unknown (Gray):**
- Newly registered
- No health data yet
- Awaiting first connection

### Health Check Frequency

**Automatic Checks:**
- Heartbeat: Every 60 seconds
- Connection status: Every 30 seconds
- Performance metrics: Every 5 minutes
- Error logs: Real-time
- Daily summary: 00:00 UTC

## Health Events

### Event Types

**CONNECTED**
- Display establishes connection
- Session created
- Initial handshake successful
- Configuration synced

**DISCONNECTED**
- Display loses connection
- Session ended
- Network interruption
- Intentional disconnect

**ERROR**
- Application error occurred
- Content load failed
- Configuration error
- Runtime exception

**WARNING**
- Minor issue detected
- Performance degradation
- Resource constraint
- Configuration mismatch

**PERFORMANCE_DEGRADED**
- Slow response times
- High CPU/memory usage
- Network latency detected
- Frame rate drops

**NETWORK_ISSUE**
- Intermittent connectivity
- Packet loss detected
- DNS resolution failure
- Bandwidth limitation

**CONTENT_LOAD_FAILED**
- Media file unreachable
- Integration timeout
- Invalid content format
- Storage access error

**LAYOUT_RENDER_ERROR**
- Layout parsing failed
- Invalid configuration
- CSS/styling error
- Rendering exception

### Event Severity Levels

**INFO**
- Normal operations
- Routine events
- Status updates
- Configuration changes

**WARNING**
- Non-critical issues
- Performance concerns
- Resource warnings
- Configuration notices

**ERROR**
- Recoverable errors
- Content failures
- Temporary issues
- Retry-able problems

**CRITICAL**
- System failures
- Unrecoverable errors
- Security issues
- Data corruption

## Health Metrics

### Uptime Metrics

**Uptime Percentage:**
- Calculated per day/week/month
- Formula: `(uptime seconds / total seconds) × 100`
- Target: 99%+ for production displays
- Excludes scheduled maintenance

**Uptime Seconds:**
- Total time display online
- Continuous connection duration
- Aggregated daily

**Downtime Seconds:**
- Total time display offline
- Disconnection duration
- Excludes scheduled maintenance

**Example Calculation:**
```
Day: 24 hours = 86,400 seconds
Uptime: 85,500 seconds
Downtime: 900 seconds (15 minutes)
Uptime %: (85,500 / 86,400) × 100 = 98.96%
```

### Connection Metrics

**Connection Count:**
- Total connections established
- Session creation events
- Reconnections included

**Disconnection Count:**
- Total disconnections
- Normal and abnormal
- Network interruptions

**Average Connection Duration:**
- Mean time between connects/disconnects
- Measured in seconds
- Indicates stability

**Connection Quality:**
- Excellent: < 5 disconnections/day
- Good: 5-20 disconnections/day
- Fair: 20-50 disconnections/day
- Poor: > 50 disconnections/day

### Error Metrics

**Error Count:**
- Total ERROR severity events
- Excludes warnings
- Per day aggregation

**Warning Count:**
- Total WARNING severity events
- Non-critical issues
- Per day aggregation

**Critical Count:**
- Total CRITICAL severity events
- Urgent attention required
- Immediate alerts sent

**Error Rate:**
- Errors per hour of uptime
- Target: < 1 error/hour
- Calculated: `total errors / uptime hours`

### Performance Metrics

**Average Response Time:**
- Mean API response latency
- Heartbeat round-trip time
- Measured in milliseconds
- Target: < 200ms

**Peak Response Time:**
- Maximum latency observed
- Slowest request in period
- Indicates worst-case performance

**Frame Rate:**
- Content rendering FPS
- Target: 30 FPS minimum
- Drops indicate performance issues

**Resource Usage:**
- CPU utilization percentage
- Memory consumption
- Network bandwidth usage
- Storage space available

## Monitoring Dashboard

### Display Health Overview

**At-a-Glance Status:**
- Total displays count
- Online displays count
- Offline displays count
- Degraded displays count

**Health Distribution:**
```
Healthy:  25 displays (83%)
Warning:   4 displays (13%)
Critical:  1 display   (3%)
Unknown:   0 displays  (0%)
```

**Recent Events:**
- Last 24 hours event timeline
- Critical alerts highlighted
- Filterable by severity
- Quick issue identification

### Individual Display Health

**Status Card:**
- Display name and location
- Current status indicator
- Last heartbeat timestamp
- Uptime today/this week

**Quick Stats:**
```
Uptime Today:       23h 45m (98.96%)
Connection Quality: Excellent
Error Count:        2 warnings
Last Error:         4 hours ago
```

**Health Timeline:**
- 24-hour visual timeline
- Color-coded status periods
- Event markers
- Zoom and filter options

### Historical Data

**Date Range Selection:**
- Last 24 hours
- Last 7 days
- Last 30 days
- Custom date range

**Trend Analysis:**
- Uptime trends over time
- Error frequency patterns
- Performance degradation
- Connection stability

**Comparative Analysis:**
- Compare multiple displays
- Store-level aggregates
- Account-wide health
- Benchmark against averages

## Alerts and Notifications

### Alert Triggers

**Display Offline:**
- Trigger: No heartbeat for 5 minutes
- Severity: CRITICAL
- Actions: Email, SMS, Slack

**Uptime Below Threshold:**
- Trigger: < 95% uptime over 24 hours
- Severity: WARNING
- Actions: Email notification

**High Error Rate:**
- Trigger: > 10 errors per hour
- Severity: ERROR
- Actions: Email, dashboard alert

**Performance Degraded:**
- Trigger: Response time > 1000ms
- Severity: WARNING
- Actions: Dashboard notification

**Connection Instability:**
- Trigger: > 10 disconnects per hour
- Severity: WARNING
- Actions: Email notification

### Alert Configuration

**Per-Display Settings:**
```
Display: Front Window Display
Alerts Enabled: Yes

Offline Alert:
  Threshold: 5 minutes
  Notify: admin@example.com, (555) 123-4567

Uptime Alert:
  Threshold: 95%
  Period: 24 hours
  Notify: admin@example.com

Error Rate Alert:
  Threshold: 10 errors/hour
  Notify: support@example.com
```

**Alert Frequency:**
- Immediate: Critical events
- Digest: Warnings (hourly summary)
- Daily Report: Health summary
- Weekly Report: Trend analysis

### Notification Channels

**Email:**
- Detailed alert information
- Links to dashboard
- Historical context
- Recommended actions

**SMS:**
- Critical alerts only
- Brief summary
- Direct dashboard link
- Opt-in required

**Slack/Discord:**
- Real-time notifications
- Threaded conversations
- Status updates
- Team collaboration

**Webhook:**
- Custom integrations
- Third-party monitoring
- Automation triggers
- JSON payload

## Troubleshooting with Health Data

### Display Won't Connect

**Check Health Events:**
1. View event log for display
2. Look for NETWORK_ISSUE events
3. Check DISCONNECTED event details
4. Review error messages

**Common Causes:**
- Network connectivity issues
- Firewall blocking connection
- Invalid session token
- Display device offline

**Resolution Steps:**
1. Verify network connection
2. Check firewall rules
3. Revoke and regenerate session
4. Restart display device

### Frequent Disconnections

**Analyze Connection Metrics:**
- Connection count vs. disconnection count
- Average connection duration
- Time of day pattern
- Network environment

**Possible Causes:**
- Unstable network
- Power interruptions
- Display device issues
- Router/switch problems

**Solutions:**
- Wired vs. wireless comparison
- Network diagnostics
- Display device upgrade
- Network infrastructure review

### Poor Performance

**Review Performance Metrics:**
- Average response time trends
- Peak response time patterns
- Error frequency correlation
- Resource usage levels

**Performance Issues:**
- High latency (> 500ms)
- Frequent content load failures
- Slow rendering
- Memory leaks

**Optimization Steps:**
1. Reduce content complexity
2. Optimize media file sizes
3. Check network bandwidth
4. Update display software
5. Review layout configuration

### Content Not Displaying

**Check Error Events:**
- CONTENT_LOAD_FAILED events
- LAYOUT_RENDER_ERROR events
- Error details and timestamps
- Retry attempts

**Common Errors:**
```
Error: CONTENT_LOAD_FAILED
Message: Failed to load image from URL
Details: HTTP 404 Not Found
URL: https://example.com/image.jpg
Timestamp: 2025-10-14 14:32:15 UTC
```

**Resolution:**
1. Verify content source URL
2. Check content source permissions
3. Test content in browser
4. Review content configuration
5. Check integration status

## API Endpoints

### Get Display Health Summary

```
GET /api/analytics/display-health/:displayId
```

**Query Parameters:**
- `startDate` (required): ISO 8601 date
- `endDate` (required): ISO 8601 date

**Response:**
```json
{
  "displayId": "disp_abc123",
  "displayName": "Front Window Display",
  "period": {
    "startDate": "2025-10-01T00:00:00Z",
    "endDate": "2025-10-14T23:59:59Z"
  },
  "uptime": {
    "uptimeSeconds": 1196400,
    "downtimeSeconds": 2400,
    "uptimePercentage": 99.80,
    "target": 99.00
  },
  "connections": {
    "connectionCount": 42,
    "disconnectionCount": 41,
    "avgConnectionDuration": 28600
  },
  "errors": {
    "totalErrors": 12,
    "warningCount": 10,
    "errorCount": 2,
    "criticalCount": 0,
    "errorRate": 0.036
  },
  "performance": {
    "avgResponseTime": 145,
    "peakResponseTime": 850
  },
  "status": "healthy",
  "lastHeartbeat": "2025-10-14T14:35:22Z"
}
```

### Get Recent Health Events

```
GET /api/displays/:displayId/health-events
```

**Query Parameters:**
- `limit` (optional): Max events to return (default: 100)
- `severity` (optional): Filter by severity (INFO, WARNING, ERROR, CRITICAL)
- `eventType` (optional): Filter by event type
- `startDate` (optional): ISO 8601 date
- `endDate` (optional): ISO 8601 date

**Response:**
```json
{
  "displayId": "disp_abc123",
  "events": [
    {
      "id": "evt_xyz789",
      "eventType": "CONTENT_LOAD_FAILED",
      "severity": "ERROR",
      "message": "Failed to load video content",
      "metadata": {
        "contentSourceId": "cs_123",
        "url": "https://example.com/video.mp4",
        "errorCode": "NETWORK_TIMEOUT"
      },
      "timestamp": "2025-10-14T14:32:15Z"
    }
  ],
  "total": 247,
  "page": 1,
  "limit": 100
}
```

## Best Practices

### Proactive Monitoring

**Daily Checks:**
- Review overnight health summary
- Check critical alerts
- Verify all displays online
- Address warnings promptly

**Weekly Reviews:**
- Uptime trend analysis
- Error pattern identification
- Performance benchmarking
- Capacity planning

**Monthly Audits:**
- Health metrics review
- Alert configuration tuning
- Performance optimization
- Hardware replacement planning

### Alert Configuration

**Start Conservative:**
- Enable critical alerts first
- Add warnings gradually
- Tune thresholds based on data
- Avoid alert fatigue

**Threshold Recommendations:**
- Offline alert: 5-10 minutes
- Uptime threshold: 95-99%
- Error rate: 5-10 errors/hour
- Response time: 500-1000ms

**Escalation Policy:**
```
1. Critical Alert → Immediate notification (email + SMS)
2. No Response (15 min) → Escalate to manager
3. No Response (30 min) → Escalate to on-call
4. No Resolution (1 hour) → Executive notification
```

### Performance Optimization

**Regular Maintenance:**
- Weekly: Review error logs
- Monthly: Performance analysis
- Quarterly: Hardware assessment
- Annually: Full system audit

**Optimization Opportunities:**
- Displays with > 2% downtime
- Error rate > 1 per hour
- Response time > 300ms
- Connection instability

**Resource Planning:**
- Monitor uptime trends
- Plan for peak loads
- Schedule maintenance windows
- Capacity expansion timing

## Integrations

### Third-Party Monitoring

**Datadog Integration:**
- Export health metrics
- Custom dashboards
- Alert routing
- Log aggregation

**PagerDuty Integration:**
- Incident management
- On-call rotation
- Escalation policies
- Incident timeline

**Slack Integration:**
- Real-time notifications
- Team collaboration
- Status updates
- Command shortcuts

### Webhooks

**Configure Webhook:**
```json
{
  "url": "https://your-system.com/webhook",
  "events": [
    "display.offline",
    "display.online",
    "display.error.critical"
  ],
  "secret": "your-webhook-secret"
}
```

**Webhook Payload:**
```json
{
  "event": "display.offline",
  "timestamp": "2025-10-14T14:35:22Z",
  "display": {
    "id": "disp_abc123",
    "name": "Front Window Display",
    "location": "Main Street Store"
  },
  "details": {
    "lastHeartbeat": "2025-10-14T14:30:15Z",
    "downtime": 307
  }
}
```

## Advanced Features

### Predictive Analytics

**Failure Prediction:**
- ML models analyze health patterns
- Predict potential failures
- Proactive maintenance alerts
- Reduce unplanned downtime

**Trend Detection:**
- Gradual performance degradation
- Increasing error rates
- Connection instability patterns
- Early warning indicators

### Custom Health Checks

**Define Custom Metrics:**
```javascript
{
  "name": "Content Refresh Success Rate",
  "query": "content_refreshes_succeeded / total_content_refreshes",
  "threshold": 0.95,
  "alert": "WARNING"
}
```

**Schedule Custom Checks:**
- HTTP endpoint monitoring
- Database query performance
- Integration health checks
- Custom script execution

### Health Score

**Composite Health Score:**
```
Health Score = (Uptime × 0.40) +
               (Connection Stability × 0.30) +
               (Error Rate × 0.20) +
               (Performance × 0.10)

Scale: 0-100
90-100: Excellent
80-89:  Good
70-79:  Fair
<70:    Poor
```

**Use Cases:**
- Display comparison
- Store performance ranking
- Account health summary
- SLA compliance tracking

## Troubleshooting Guide

### Health Data Not Updating

**Symptoms:**
- Last heartbeat timestamp frozen
- Metrics not changing
- Events not appearing
- Status stuck

**Check:**
1. Display actually connected?
2. Heartbeat service running?
3. Database connectivity?
4. API endpoint accessible?

### Inaccurate Metrics

**Symptoms:**
- Uptime percentages incorrect
- Connection counts wrong
- Performance metrics unusual
- Data inconsistencies

**Validate:**
1. Clock synchronization (NTP)
2. Timezone configuration
3. Data aggregation logic
4. Database integrity

### Missing Health Events

**Symptoms:**
- Events not logged
- Gaps in event timeline
- Missing critical alerts
- Incomplete history

**Troubleshoot:**
1. Event logging enabled?
2. Storage space available?
3. Log rotation configured?
4. Database write permissions?

## Next Steps

- **[Display Registration](../workflows/display-registration.md)** - Register and configure displays
- **[Troubleshooting Displays](../troubleshooting/display-problems.md)** - Fix display issues
- **[Analytics Dashboard](./analytics-dashboard.md)** - View performance analytics
- **[Alert Configuration](../workflows/notification-setup.md)** - Configure health alerts
