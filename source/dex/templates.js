// Event Templates & Formatting

export const EVENT_TEMPLATES = {
    "message_received": "{user} posted in {channel}: {message}",
    "action_performed": "{actor} {action} {target}",
    "log_entry": "[{level}] {message}",
    "error_occurred": "ERROR: {error}",
    "status_change": "{entity} changed status to {new_status}",
    "metric_recorded": "{metric_name}: {value}{unit}",
    "messaging.user.joined_voice": "{user_name} joined voice channel {channel_name}",
    "messaging.user.left_voice": "{user_name} left voice channel {channel_name}",
    "messaging.user.sent_message": "{user_name} in {channel_name}: {content}",
    "messaging.bot.sent_message": "Dexter sent in {channel_name}: {content}",
    "messaging.bot.joined_voice": "Dexter joined voice channel {channel_name}",
    "messaging.bot.voice_response": "Dexter said: {content}",
    "messaging.bot.status_update": "Dexter status changed to {status}: {details}",
    "messaging.user.speaking.started": "{user_name} started speaking",
    "messaging.user.speaking.stopped": "{user_name} stopped speaking",
    "messaging.user.transcribed": "{user_name} said: {transcription}",
    "messaging.user.joined_server": "{user_name} joined {server_name}",
    "messaging.webhook.message": "{user_name} (Webhook): {content}",
    "webhook.processed": "Webhook processed: {status}",
    "voice_speaking_started": "User {user_id} started speaking in voice channel {channel_id}",
    "voice_speaking_stopped": "User {user_id} stopped speaking in voice channel {channel_id}",
    "voice_transcribed": "{user_name} said: {transcription}",
    "engagement.decision": "Engagement Decision: {decision} ({reason})",
    "bot_response": "Bot Responded: {response}",
    "moderation.explicit_content.deleted": "Explicit content deleted in {channel_name} from {user_name}: {reason}",
    "analysis.link.completed": "Analyzed link: {url}",
    "analysis.visual.completed": "Analyzed image: {filename}",
    "system.analysis.audit": "Analysis Audit: {tier}",
    "system.blueprint.generated": "Blueprint Generated: {title}",
    "system.cli.command": "CLI Command: {command} {args} ({status})",
    "system.cli.status": "CLI Status: {message}",
    "system.notification.generated": "Notification ({priority}): {title}"
};

export function formatEventSummary(type, data) {
    let template = EVENT_TEMPLATES[type];
    if (type === 'voice_transcribed' && !data.user_name && data.user_id) {
        template = "User {user_id} said in voice channel {channel_id}: {transcription}";
    }
    // Specific formatting for system.notification.generated
    if (type === 'system.notification.generated') {
        const priority = data.priority ? data.priority.charAt(0).toUpperCase() + data.priority.slice(1) : 'Low';
        template = `Notification (${priority}): ${data.title}`;
    }
    // Specific formatting for system.analysis.audit
    if (type === 'system.analysis.audit') {
        const tier = data.tier ? data.tier.toUpperCase() : 'UNKNOWN';
        template = `Analysis Audit: ${tier}`;
    }
    if (!template) return type;
    let summary = template.replace(/\{(\w+)\}/g, (match, key) => {
        return data[key] !== undefined && data[key] !== null ? data[key] : match;
    });
    if ((type === 'messaging.user.transcribed' || type === 'voice_transcribed') &&
        data.detected_language && data.detected_language !== 'en' && data.english_translation) {
        summary += ` (Translation: ${data.english_translation})`;
    }
    return summary;
}
