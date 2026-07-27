---
title: 2.0 Stable Changelog
description: Explore all major changes from Cially 2.0 Beta to 2.0 Stable – a complete upgrade in features, performance, and usability.
---

# Cially 2.0 Stable Changelog

Hello everyone!

I'm glad to announce the next major version of Cially. These new changes make Cially easier to use and to maintain!

## Voice Channel Statistics
The biggest feature request is finally complete! These new voice stats now show when members join & leave voice channels, which voice channels and which users are most active and the total duration ever spent on voice channels on your server! 

## User & Data Privacy Changes
In order to stay compliant with Discord's ToS, while making sure that Cially keeps members safe, we've made many changes with how Cially handles data in general. Even though Cially is self hosted, we still need to take some measures to stay safe.
1. **Data Retention:** Cially now automatically deletes specific data older than 4 weeks old, while keeping all-time general data (such as total messages ever sent etc)
2. **Opt-Out Choice:** A discord slash-command has been added that can be used by every member of your Discord Server called /privacy-settings. Using this command members can choose to stop Cially from tracking their data, as well as triggering permanent deletion of the existing data tied to their Discord ID.
3. **Account Management:** It's now possible to create multiple admin accounts so server owners can share Cially insights with their team without having to make the data fully available for everyone
4. **Other Fixes:** Other fixes such as API endpoint protection, dependency updates, etc. have been also applied

## Speed & Performance Improvements
Many back-end fixes have been applied which make data tracking much faster. Previously it would take a couple of seconds until events were saved into the database. Now, events are logged almost instantly while using less resources while processing. Also the animation speed on the dashboard has been slightly increased so it feels snappier while navigating.

##  Other Changes & Fixes for the End User
1. Fixed issues that would trigger multiple Discord requests which could potentially rate-limit your discord bot easier
2. Added a little pop up on the sidebar for when updates are available so you can be notified even when you don't check GitHub about new updates
3. Added a cool on-boarding page when using Cially for the first time, which shows some interesting information while making sure that you've successfully completed the initial setup  
4. Visual Improvements across the entire website
5. Added a new /self-stats command for server members so they can see what Cially knows about them. I might add more ways for members to interact with Cially in the future

## Changes & Fixes for Maintainers
1. The entire Discord Bot has been re-written to Typescript. 
2. Pocketbase has been updated to its latest version so it includes all the latest features
3. Cleaner code in general
