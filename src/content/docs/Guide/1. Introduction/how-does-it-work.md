---
title: How Does it Work
description: Understand the architecture behind Cially’s powerful Discord analytics.
---

# How Does Cially Work?

Cially is a full-stack analytics solution powered by three key components:

- A **Discord Bot**
- A **Next.js Web Application**
- A **Pocketbase Backend**

Together, these components work in sync to collect, store, and display real-time insights about your Discord server.

---

## System Architecture

### 1. **Discord Bot**

The Cially bot runs in your server and listens for a wide range of events — such as messages, joins, leaves, edits, and more. Every event is logged and sent to the database through the bot's internal API layer.

### 2. **Pocketbase Backend**

Pocketbase acts as the database and backend for Cially. It stores all the event data sent by the bot, using unique identifiers like user IDs, channel IDs, and message IDs for efficient tracking and retrieval.

### 3. **Next.js Web Dashboard**

The frontend is a responsive, user-friendly dashboard built with Next.js. It fetches data from Pocketbase and presents it in a clean, insightful format for server admins and moderators.

---

## Real-Time Sync & Resolution

As most data is stored using raw Discord IDs for performance reasons, the dashboard communicates directly with the bot to:

- Resolve user, channel, and role IDs into readable names  
- Fetch live, on-demand information (e.g., online status, server name changes)  
- Continuously sync recent server activity for the most up-to-date insights

This tight integration ensures data is both accurate and human-readable — without manual intervention.

---

Cially’s modular design means it's flexible, scalable, and easy to self-host — all while providing deep visibility into your Discord server.
