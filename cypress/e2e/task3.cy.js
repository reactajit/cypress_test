


//task3
SELECT 
    w1.id
FROM 
    Weather w1
JOIN 
    Weather w2
ON 
    w1.recordDate = DATE_ADD(w2.recordDate, INTERVAL 1 DAY)
WHERE 
    w1.temperature > w2.temperature;
//task4
Inorder to have clarity on requirements i would ask following questions:

// What is the configured value for the number of previous passwords that cannot be reused?
// Should the password history be tracked indefinitely or only for a certain period?
// How will the system handle password changes made before the implementation of this feature?
// Will the prompt question/answer be mandatory or optional for users?
// Can users choose from a set of predefined questions, or can they create their own custom questions?
// How many prompt questions/answers can a user set up? Is there a limit?

