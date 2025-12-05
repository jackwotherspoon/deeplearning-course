Here is a detailed prompt designed to guide a developer (or AI) in implementing a robust "Favorites" feature, including a new dedicated view for the schedule.

***

**Prompt:**

```markdown
Act as a Full-Stack React Developer. I need you to implement a "My Favorites" feature for the conference website in `lesson-6`.

**Objective:** Allow users to "favorite" sessions from the catalog and view their personalized itinerary in chronological order on a new page.

**Technical Implementation Steps:**

1.  **Context & State (`src/context/FavoritesContext.tsx`):**
    -   Create a new React Context named `FavoritesContext`.
    -   **State:** Manage a list of `favoriteSessionIds` (string[]).
    -   **Actions:** Implement `toggleFavorite(sessionId: string)` which adds or removes the ID from the list.
    -   **Persistence:** Use `localStorage` to save the user's favorites so they persist across browser sessions.
    -   **Helper:** Include a helper function `isFavorite(sessionId: string)` for easy UI checks.

2.  **UI Components Updates:**
    -   **`src/pages/SessionDetail.tsx`:**
        -   Replace the static "Add to Schedule" button logic.
        -   If the session is *not* a favorite, show a primary "Add to Favorites" button.
        -   If the session *is* a favorite, show a secondary/outline "Remove from Favorites" button.
        -   Add a small "Heart" icon toggle to the header (next to the title) for quick access.
    -   **`src/components/SessionCard.tsx` (or inline in `Catalog.tsx`):**
        -   Add a small "Heart" icon button to the session cards in the main catalog view so users can favorite sessions without clicking into details.

3.  **New Page: My Itinerary (`src/pages/MyItinerary.tsx`):**
    -   Create a new route `/my-itinerary`.
    -   **Data Retrieval:** Filter the global `SESSIONS` array to include only those present in `favoriteSessionIds`.
    -   **Sorting:** Sort the filtered sessions chronologically:
        -   First by `day` (Day 1, Day 2, Day 3).
        -   Then by `time` (convert string times like "10:00 AM" to comparable values if necessary, or rely on simple string sort if format is consistent "HH:MM AM/PM").
    -   **Grouping:** Visually group the sessions by Day (e.g., a header for "Day 1 - Nov 20").
    -   **Empty State:** If the user has no favorites, display a friendly message with a link back to the `/catalog`.

4.  **Routing (`src/App.tsx`):**
    -   Wrap the entire app with `FavoritesProvider`.
    -   Add the new route for `/my-itinerary`.
    -   (Optional) Add a link to "My Itinerary" in the main navigation (e.g., in `Layout.tsx`).

**Deliverables:**
-   Full code for `src/context/FavoritesContext.tsx`.
-   Updated code for `src/App.tsx`, `src/pages/SessionDetail.tsx`, and `src/pages/Catalog.tsx`.
-   New code for `src/pages/MyItinerary.tsx`.
```
