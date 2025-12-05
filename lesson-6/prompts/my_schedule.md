Here is a comprehensive prompt you can use to request this feature. It is structured to provide the developer (or AI agent) with all the necessary context and technical requirements.

***

**Prompt:**

```markdown
Act as a Senior React Developer. I need you to implement a "My Schedule" feature for the conference website in `lesson-6`.

**Current State:**
- The `SessionDetail.tsx` page has a static "Add to Schedule" button that is currently non-functional.
- There is no global state management for user preferences.

**Requirements:**
1.  **State Management:** Create a new React Context named `ScheduleContext` to manage the user's personal schedule.
    - It should store an array of `sessionId` strings.
    - It should provide functions to `addToSchedule(sessionId)` and `removeFromSchedule(sessionId)`.
    - It must check if a session is `isScheduled(sessionId)`.
2.  **Persistence:** specific to this browser, use `localStorage` to persist the schedule so data is not lost on page reload.
3.  **UI Implementation:**
    - Update `src/pages/SessionDetail.tsx`:
        - Connect the existing "Add to Schedule" button to the new context.
        - Toggle the button state: If the session is already added, the button should say "Remove from Schedule" and use a different visual style (e.g., a red/outline variant).
    - Update `src/App.tsx` to wrap the application with the new `ScheduleProvider`.

Please provide the full code for the new `src/context/ScheduleContext.tsx` file and the updated code for `src/App.tsx` and `src/pages/SessionDetail.tsx`.
```
